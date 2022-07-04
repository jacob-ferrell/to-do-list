import Item from './item';
import Main from './index';
import DOM from './dom';

const Events = (() => {
    //add all event listeners which are triggered through the project display
    function addProjectButtonClickEvents(addItem, removeProject, project, byPriority, byDate) {
        const taskFormContainer = document.querySelector('.new-task-popup');
        const taskForm = document.getElementById('new-task-form');
        taskForm.addEventListener('submit', submitForm);
        addItem.addEventListener('click', () => taskFormContainer.style.display = 'flex');
        
        let cancel = document.querySelector('.close');
        cancel.addEventListener('click', () => {
            taskFormContainer.style.display = 'none';
            taskForm.reset();
        })
        removeProject.addEventListener('click', ()=> {
            document.getElementById(`sidebar-${project.id}`).remove();
            Main.removeProject(project);
            DOM.removeAllChildren(document.querySelector('.project-display'));
        });
        byPriority.addEventListener('click', sortByPriority);
        byDate.addEventListener('click', sortByDate);
        function submitForm(e) {
            project = DOM.selectDisplayedProject();
            let title = document.querySelector('.new-task-popup #title').value;
            let description = document.querySelector('.new-task-popup .description').value;
            let dueDate = document.querySelector('.new-task-popup #due-date').value;
            document.querySelectorAll('.new-task-popup .priority-container input').forEach(radio => {
                if (radio.checked && title && dueDate) {
                    console.log(project);
                    project.items.push(Item(title, description, dueDate, radio.value, project));
                    window.localStorage['projects'] = JSON.stringify(Main.projects);
                }
            });
            taskFormContainer.style.display = 'none';
            DOM.displayProject(project);
            taskForm.reset();
            taskForm.removeEventListener('submit', submitForm);
        }
        //sort items by priority in descending order
        function sortByPriority(e) {
            const priorities = ['low', 'medium', 'high'];
            project.items = project.items.sort((a, b) => priorities.indexOf(b.priority) - priorities.indexOf(a.priority));
            byPriority.classList.add('selected-priority');
            byDate.classList.remove('selected-priority');
            DOM.displayProject(project);
            
        }
        //sort items by date in ascending order
        function sortByDate(e) {
            project.items = project.items.sort((a, b) => Main.getDate(a.dueDate) - Main.getDate(b.dueDate));
            DOM.displayProject(project);
            byPriority.classList.remove('selected-priority');
            byDate.classList.add('selected-priority');
        }
        
    }
    //add event listeners for everything within the element for each item
    function addItemEvents (checkbox, edit, deleteBtn) {
        checkbox.addEventListener('click', markComplete);
        edit.addEventListener('click', (e) => {
            let taskId = e.target.parentNode.parentNode.id;
            DOM.setEditTaskFields(taskId);
            setEditTaskEvents(taskId);
        })
        deleteBtn.addEventListener('click', (event)=> {
            let parent = event.target.parentNode.parentNode;
            let projectId = parent.id.replace(/-\d+$/, '');
            let project = Main.projects.filter(project => project.id == projectId)[0];
            parent.remove();
            Main.removeItem(parent.id, project);
            DOM.displayProject(DOM.selectDisplayedProject());
        })
    }
    //toggle an items complete status and update the display
    function markComplete(e) {
        let itemId = e.target.parentNode.id;
        e.target.parentNode.classList.toggle('complete');
        Main.projects.forEach(project => project.items.forEach(item => {
            if (item.id == itemId) {
                item.complete = e.target.parentNode.classList.contains('complete');
            }
        }))
        window.localStorage['projects'] = JSON.stringify(Main.projects);
        DOM.displayProject(DOM.selectDisplayedProject());
    }
    function setEditTaskEvents(taskId) {
        const projectId = taskId.replace(/\-\d+$/, '');
        const project = Main.projects.filter(project => project.id == projectId)[0];
        const byId = project.items.map(e => e.id);
        const task = project.items.filter(task => task.id == taskId)[0];
        const form = document.getElementById('edit-task-form')
        const newForm = form.cloneNode(true);  
        const closeForm = () => document.querySelector('.edit-task-popup').style.display = 'none';
        form.parentNode.replaceChild(newForm, form);
        newForm.addEventListener('submit', ()=> {
            let title = document.querySelector('#edit-task-form #title').value;
            let description = document.querySelector('#edit-task-form .description').value;
            let dueDate = document.querySelector('#edit-task-form #due-date').value;
            document.querySelectorAll('#edit-task-form .priority-container input').forEach(radio => {
                if (radio.checked) project.items[byId.indexOf(taskId)] = Item(title, description, dueDate, radio.value, project, task.complete);
            });
            const displayed = DOM.selectDisplayedProject();
            if (displayed.id == '9998') document.querySelector('.today').click();
            else if (displayed.id == '9997') document.querySelector('.week').click();
            DOM.displayProject(displayed);
            closeForm();
        })
        const close = document.querySelector('.close-edit');
        close.addEventListener('click', ()=> closeForm());
        
        
    }

    function addTabEvents(inbox, today, week) {
        document.querySelectorAll('.inbox, .today, .week').forEach(tab => tab.addEventListener('click', ()=> {
            const pairs = {'inbox':inbox, 'today':today, 'week':week}
            DOM.displayProject(pairs[tab.className]);
        }))
    }

    function addNewProjectButtonEvents() {
        const newProjectButton = document.querySelector('.new-project');
        newProjectButton.addEventListener('click', ()=> {
            DOM.createProjectNameForm();
            let submit = document.getElementById('submit');
            let cancel = document.getElementById('cancel');
            submit.addEventListener('click', ()=> {
                Main.addProject();
                document.getElementById('add-project').remove();
                newProjectButton.style.display = 'flex';
            })
            cancel.addEventListener('click', () => {
                document.getElementById('add-project').remove();
                newProjectButton.style.display = 'flex';
            })
        })
    }
    return {addProjectButtonClickEvents, addItemEvents, addTabEvents, addNewProjectButtonEvents};
})();

export default Events;