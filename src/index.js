import './style.css';
import Item from './item';
import DOM from './dom';
import Project from './project.js';


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
            if (item.dueDate == todaysDate) today.push(item);
        }))
        return today;
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
