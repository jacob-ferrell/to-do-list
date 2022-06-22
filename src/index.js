import './style.css';
import Item from './item';
import DOM from './dom';
import Project from './project.js';
const Main = (() => {
    const projects = [];
    const newProjectButton = document.querySelector('.new-project');
    newProjectButton.addEventListener('click', ()=> {
        DOM.createForm('project');
        newProjectButton.style.display = 'none';
        let submit = document.getElementById('submit');
        submit.addEventListener('click', ()=> {
            addProject();
        })
    })

    const addProject = () => {
        let name = document.querySelector('.name input').value;
        let description = document.querySelector('.description input').value;
        let newProject = Project(name, description, projects);
        projects.push(newProject);
        DOM.addProjectToSidebar(newProject, projects);
        document.querySelector('.projects-heading').textContent = `Projects (${projects.length})`;
        document.getElementById('form').remove();
    }

    const removeProject = (project) => {
        let byId = projects.map(e => e.id);
        projects.splice(byId.indexOf(project.id), 1);
        document.querySelector('.projects-heading').textContent = `Projects (${projects.length})`;
    }

    return {removeProject};
})();
export default Main;
