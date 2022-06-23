import './style.css';
import Item from './item';
import DOM from './dom';
import Project from './project.js';


const Main = (() => {
    const projects = [];
    const inbox = Project('Inbox', [], true);
    DOM.displayProject(inbox);
    document.querySelector('.inbox').addEventListener('click', ()=> {
        DOM.displayProject(inbox);
    })
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
