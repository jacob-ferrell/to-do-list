import './style.css';
import Item from './item';
import DOM from './dom';
import Project from './project.js';
import { compareAsc, format } from 'date-fns';


const Main = (() => {
    const projects = [];

    const inbox = Project('Inbox', [], true);
    projects.push(inbox);
    DOM.displayProject(inbox);
    document.querySelector('.inbox').addEventListener('click', ()=> {
        DOM.displayProject(inbox);
    })

    const today = Project('Today', [], false, true);
    const todayTab = document.querySelector('.today');
    projects.push(today);

    
    todayTab.addEventListener('click', ()=> {
        today.items = removeDuplicateItems(getTodayItems());
        console.log(today.items, getTodayItems())
        DOM.displayProject(today)
    })

    const week = Project('This Week', [], false, false, true);
    const weekTab = document.querySelector('.week');
    projects.push(week);
    weekTab.addEventListener('click', ()=> {
        week.items = removeDuplicateItems(getWeekItems());
        DOM.displayProject(week);
    })
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
        let today = [];
        const todaysDate = new Date().toISOString().slice(0, 10);
        projects.forEach(project => project.items.forEach(item => {
            if (item.dueDate == todaysDate && project.id != '9998') today.push(item);
        }))
        return today;
    }

    const getWeekItems = () => {
        let week = [];
        let today = getDate(new Date().toISOString().slice(0, 10));
        console.log(today);
        projects.forEach(project => project.items.forEach(item => {
            if (!['9997'].includes(project.id)) {
                console.log('poop');
                let date = getDate(item.dueDate);
                let nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
                if (date >= today && date <= nextWeek) week.push(item);
            }
        }))
        return week;
    }

    const getDate = (str) => {
        let arr = str.split('-');
        let year = arr[0];
        let month = parseInt(arr[1], 10) - 1;
        let day = arr[2];
        return new Date(year, month, day);
    }

    const addProject = () => {
        let name = document.querySelector('#add-project input').value;
        if (name) {
            let newProject = Project(name, projects);
            projects.push(newProject);
            DOM.addProjectToSidebar(newProject, projects);
            document.querySelector('.projects-heading').textContent = `Projects (${projects.length})`;
            DOM.displayProject(newProject);
        }
    }
    const removeProject = (project) => {
        let byId = projects.map(e => e.id);
        projects.splice(byId.indexOf(project.id), 1);
        document.querySelector('.projects-heading').textContent = `Projects (${projects.length})`;
    }

    return {removeProject, projects, inbox};
})();
export default Main;
