import './style.css';
import Item from './item';
import DOM from './dom';
import Project from './project.js';


const Main = (() => {
    const projects = JSON.parse(window.localStorage.getItem('projects')) || [];
    let inbox;
    let today;
    let week; 
    

    //DOM.displayProject(inbox);
    document.querySelectorAll('.inbox, .today, .week').forEach(tab => tab.addEventListener('click', ()=> {
        const pairs = {'inbox':inbox, 'today':today, 'week':week}
        DOM.displayProject(pairs[tab.className]);
    }))

    
    function removeDuplicateItems(items) {
        const uniqueIds = [];
        return items.filter(item => {
            const isDuplicate = uniqueIds.includes(item.id);
            if (!isDuplicate) {
                uniqueIds.push(item.id);
                return true;
            }
            return false;
        });
       
    }

    function getProjectById(id) {
        return projects.filter(project => project.id == id)[0];
    }
    const newProjectButton = document.querySelector('.new-project');
    newProjectButton.addEventListener('click', ()=> {
        DOM.createProjectNameForm();
        let submit = document.getElementById('submit');
        let cancel = document.getElementById('cancel');
        submit.addEventListener('click', ()=> {
            addProject();
            document.getElementById('add-project').remove();
            newProjectButton.style.display = 'flex';
        })
        cancel.addEventListener('click', () => {
            document.getElementById('add-project').remove();
            newProjectButton.style.display = 'flex';
        })
    })

    const getTodayItems = () => {
        let todayArr = [];
        const cur = new Date();
        const todaysDate = `${cur.getFullYear()}-${(cur.getMonth() + 1).toString().padStart(2, '0')}-${(cur.getDate()).toString().padStart(2, '0')}`
        projects.forEach(project => project.items.forEach(item => {
            if (item.dueDate == todaysDate && !['9997', '9998'].includes(project.id)) todayArr.push(item);
        }))
        today.items = todayArr;
    }

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

    const sortByCompleted = (project) => {
        project.items = project.items.sort((a, b) => Number(a.complete) - Number(b.complete))
    }

    const getDate = (str) => {
        let arr = str.split('-');
        let year = arr[0];
        let month = parseInt(arr[1], 10) - 1;
        let day = arr[2];
        return new Date(year, month, day);
    }

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
    const removeProject = (project) => {
        let byId = projects.map(e => e.id);
        projects.splice(byId.indexOf(project.id), 1);
        window.localStorage['projects'] = JSON.stringify(Main.projects);
        document.querySelector('.projects-heading').textContent = `Projects (${getNumProjects()})`;
    }
    const removeItem = (itemId, project) => {
        let byId = project.items.map(e => e.id);
        project.items.splice(byId.indexOf(itemId), 1);
        window.localStorage.setItem('projects', JSON.stringify(Main.projects));
    }
    const getNumProjects = () => {
        return projects.filter(project => !['9997', '9998', '9999'].includes(project.id)).length
    }

    if (projects.length) {
        inbox = getProjectById('9999');
        today = getProjectById('9998');
        week = getProjectById('9997');
        if (projects.length > 3) {
            projects.filter(e => !['9999', '9998', '9997'].includes(e.id)).forEach(project => {
                DOM.addProjectToSidebar(project, projects);
            })
        }
    } else {
    inbox = Project('Inbox', [], true);
    projects.push(inbox);

    today = Project('Today', [], false, true);
    projects.push(today);

    week = Project('This Week', [], false, false, true);
    projects.push(week);
    }
    getTaskCounts();
    DOM.displayProject(inbox, true);
    
    return {removeProject, projects, inbox, getDate, sortByCompleted, getTaskCounts, removeItem};
})();
export default Main;
