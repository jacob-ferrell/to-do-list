import './style.css';
import Item from './item';
import DOM from './dom';
import Project from './project.js';

const projects = [];
const newProjectButton = document.querySelector('.new-project');
newProjectButton.addEventListener('click', ()=> {
    DOM.createForm('project');
    let submit = document.getElementById('submit');
    submit.addEventListener('click', ()=> {
        addProject();
    })
})

const addProject = () => {
    let name = document.querySelector('.name input').value;
    let description = document.querySelector('.description input').value;
    let newProject = Project(name, description);
    projects.push(newProject);
    DOM.addProjectToSidebar(newProject);
    document.getElementById('form').remove();
}
