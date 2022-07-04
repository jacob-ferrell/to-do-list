import './style.css';
import Item from './item';
import DOM from './dom';
import Project from './project.js';
import Events from './events';


const Main = (() => {
    //declare global variables and load save data if it exists
    const projects = JSON.parse(window.localStorage.getItem('projects')) || [];
    let inbox;
    let today;
    let week;
    
    
    //select a project by the provided ID
    function getProjectById(id) {
        return projects.filter(project => project.id == id)[0];
    }
    //get all items which are due 'today' and add them to the today project
    const getTodayItems = () => {
        let todayArr = [];
        const cur = new Date();
        const todaysDate = `${cur.getFullYear()}-${(cur.getMonth() + 1).toString().padStart(2, '0')}-${(cur.getDate()).toString().padStart(2, '0')}`
        projects.forEach(project => project.items.forEach(item => {
            if (item.dueDate == todaysDate && !['9997', '9998'].includes(project.id)) todayArr.push(item);
        }))
        today.items = todayArr;
    }
    //get all items which are due within the next 7 days and add them to the week project
    const getWeekItems = () => {
        let weekArr = [];
        const cur = new Date();
        const todaysDate = `${cur.getFullYear()}-${(cur.getMonth() + 1).toString().padStart(2, '0')}-${(cur.getDate()).toString().padStart(2, '0')}`
        let today = getDate(todaysDate);
        projects.forEach(project => project.items.forEach(item => {
            if (!['9997', '9998'].includes(project.id)) {
                let date = getDate(item.dueDate);
                let nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
                if (date >= today && date <= nextWeek) weekArr.push(item);
            }
        }))
        week.items = weekArr;
    }
    //sort the items of a given project by whether or not the task is completed, with incomplete tasks coming first
    const sortByCompleted = (project) => {
        project.items = project.items.sort((a, b) => Number(a.complete) - Number(b.complete))
    }
    //take a date string in the format 'yyyy-mm-dd' and return a date object of the same date
    const getDate = (str) => {
        let arr = str.split('-');
        let year = arr[0];
        let month = parseInt(arr[1], 10) - 1;
        let day = arr[2];
        return new Date(year, month, day);
    }
    //get the number of tasks every project has and display that number in its tab
    const getTaskCounts = () => {
        getTodayItems();
        getWeekItems();
        const pairs = {'inbox':inbox, 'today':today, 'week':week}
        const byId = projects.map(project => project.id);

        document.querySelectorAll('.inbox, .today, .week, .projects-container > div').forEach((tab, i) => {
            let project;
            let tabId;
            let selector;
            if (tab.id) {
                selector = `#${tab.id}`
                tabId = tab.id.replace('sidebar-', '');
                project = projects[byId.indexOf(tabId)];
            } else {
                selector = `.${tab.className}`
                project = pairs[tab.className]
            }
            let container = document.querySelector(`${selector} .task-count-template`);
            let count = document.querySelector(`${selector} .task-count-number`);
            let incompleteTasks = project.items.filter(item => !item.complete)
            if (incompleteTasks.length) {
                container.style.display = 'flex';
                count.textContent = incompleteTasks.length;
            } else container.style.display = 'none';
        })
    }
     //create a new project object, display that project, and create a tab for that project in the sidebar based on a given name
    const addProject = () => {
        let name = document.querySelector('#add-project input').value;
        if (name) {
            let newProject = Project(name, projects);
            projects.push(newProject);
            DOM.addProjectToSidebar(newProject, projects);
            document.querySelector('.projects-heading').textContent = `Projects (${getNumProjects()})`;
            window.localStorage['projects'] = JSON.stringify(Main.projects);
            DOM.displayProject(newProject);
        }
    }
    //remove a project from the global variable projects
    const removeProject = (project) => {
        let byId = projects.map(e => e.id);
        projects.splice(byId.indexOf(project.id), 1);
        window.localStorage['projects'] = JSON.stringify(Main.projects);
        document.querySelector('.projects-heading').textContent = `Projects (${getNumProjects()})`;
    }
    //remove an item from a given project based on its id
    const removeItem = (itemId, project) => {
        let byId = project.items.map(e => e.id);
        project.items.splice(byId.indexOf(itemId), 1);
        window.localStorage.setItem('projects', JSON.stringify(Main.projects));
    }
    //get the total number of user created projects (not inbox, today, or week)
    const getNumProjects = () => {
        return projects.filter(project => !['9997', '9998', '9999'].includes(project.id)).length
    }
    //initial method to be run when the page is opened/reloaded
    const initialize = (() => {
        //if save data already exists, set global variables to already existing data
        if (projects.length) {
            inbox = getProjectById('9999');
            today = getProjectById('9998');
            week = getProjectById('9997');
            //if there are user created projects in save data, add a tab for each one to the sidebar
            if (projects.length > 3) {
                projects.filter(e => !['9999', '9998', '9997'].includes(e.id)).forEach(project => {
                    DOM.addProjectToSidebar(project, projects);
                })
            }
        //if there is no save data, create default projects and add them to the projects global variable    
        } else {
        inbox = Project('Inbox', [], true);
        projects.push(inbox);
    
        today = Project('Today', [], false, true);
        projects.push(today);
    
        week = Project('This Week', [], false, false, true);
        projects.push(week);
        }
        //get task counts, display default project (inbox), and add event listeners to everything on the page
        getTaskCounts();
        DOM.displayProject(inbox, true);
        Events.addTabEvents(inbox, today, week);
        Events.addNewProjectButtonEvents();
    })();
    

    
    return {removeProject, projects, inbox, getDate, sortByCompleted, getTaskCounts, removeItem, addProject};
})();
export default Main;
