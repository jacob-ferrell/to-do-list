import Item from './item';
import Main from './index';
import { isToday } from 'date-fns';

const DOMManipulation = (() => {

    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

    //add name of project to list in sidebar. also add event listener so that when clicked, the projects information is displayed
    function addProjectToSidebar(project, projects) {
        const container = document.querySelector('.projects-container');
        let toAdd = document.createElement('div');
        toAdd.textContent = project.name;
        toAdd.id = `sidebar-${project.id}`;
        toAdd.addEventListener('click', ()=> displayProject(project));
        container.appendChild(toAdd);
    }

    function displayProject(project) {
        const container = document.querySelector('.project-display');
        container.id = project.id;
        const heading = document.createElement('div');
        heading.classList.add('project-display-heading');
        container.style.display = 'flex';
        removeAllChildren(container);
        let name = document.createElement('div')
        name.textContent = project.name;
        name.id = 'project-name-display';

        let sortContainer = document.createElement('div');
        sortContainer.classList.add('sort-container');

        let sortLabel = document.createElement('div');
        sortLabel.textContent = 'Sort By'
        sortContainer.appendChild(sortLabel);

        let sortPriority = document.createElement('button');
        sortPriority.textContent = 'Priority';
        sortContainer.appendChild(sortPriority);

        let sortDate = document.createElement('button');
        sortDate.textContent = 'Due Date';
        sortContainer.appendChild(sortDate);

        let addItemContainer = document.createElement('div');
        addItemContainer.classList.add('new-task-container');
        let addItemBtn = document.querySelector('.new-task-button').cloneNode(true);
        addItemBtn.classList.remove('new-task-button')
        addItemBtn.id = 'add-item-button';
        let addItemLabel = document.createElement('div');
        addItemLabel.textContent = 'Task';
        addItemContainer.appendChild(addItemBtn);
        addItemContainer.appendChild(addItemLabel);

        let removeBtn = document.querySelector('.remove-project-button-template').cloneNode(true);
        removeBtn.classList.remove('remove-project-button-template');
        removeBtn.classList.add('remove-project-button');
        sortContainer.appendChild(removeBtn);

        heading.appendChild(name);
        heading.appendChild(sortContainer);
        if (['9999', '9998', '9997'].includes(container.id)) removeBtn.style.display = 'none';
        container.appendChild(heading);
        container.appendChild(addItemContainer);
        if (['9998', '9997'].includes(container.id)) addItemContainer.style.display = 'none';
         addProjectButtonClickEvents(addItemBtn, removeBtn, project, sortPriority, sortDate);
        if (project.items.length) {
            container.appendChild(createItemElements(project.items));
        }
    }
    //create a list of todo items for each project in the DOM
    function createItemElements(items) {
        const container = document.createElement('div');
        container.classList.add('items-container');
        items.forEach((item, i) => {
            let itemElement = document.createElement('div');
            itemElement.classList.add('todo-item');
            if (item['complete']) itemElement.classList.add('complete');
            itemElement.id = item.id;

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.addEventListener('click', markComplete);
            if (item.complete) checkbox.checked = true;

            let buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('item-buttons-container');

            let edit = document.querySelector('.edit-task-button').cloneNode(true);
            edit.classList.add('edit');
            edit.classList.remove('edit-task-button');
            edit.id = `edit-${item.id}`;
            edit.addEventListener('click', (e) => {
                let taskId = e.target.parentNode.parentNode.id;
                setEditTaskFields(taskId);
                setEditTaskEvents(taskId);
            })
        
            let deleteBtn = document.querySelector('.delete-task-button').cloneNode(true);
            deleteBtn.classList.add('delete');
            deleteBtn.classList.remove('delete-task-button');
            deleteBtn.id = `delete-${item.id}`
            deleteBtn.addEventListener('click', (event)=> {
                let parent = event.target.parentNode.parentNode;
                let projectId = parent.id.replace(/-\d+$/, '');
                let project = Main.projects.filter(project => project.id == projectId)[0];
                parent.remove();
                project.removeItem(parent.id);
            })

            const colors = {
                low : 'yellow',
                medium : 'orange',
                high : 'red'
            }
            itemElement.style.borderLeft = `6px solid ${colors[item.priority]}`;

            itemElement.appendChild(checkbox);
            let keys = ['title', 'dueDate'];
            keys.forEach(key => {
                let field = document.createElement('div');
                field.classList.add(`item-${key}`);
                field.textContent = key == 'dueDate' ? formatDate(item[key]) : item[key];
                if (key == 'dueDate') buttonsContainer.appendChild(field);
                else itemElement.appendChild(field)
            })
            buttonsContainer.appendChild(edit)
            buttonsContainer.appendChild(deleteBtn);
            itemElement.appendChild(buttonsContainer);
            itemElement.appendChild(document.createElement('hr'));
            container.appendChild(itemElement);
        })
        return container;
    }

    function markComplete(e) {
        let itemId = e.target.parentNode.id;
        e.target.parentNode.classList.toggle('complete');
        Main.projects.forEach(project => project.items.forEach(item => {
            if (item.id == itemId) {
                item.complete = e.target.parentNode.classList.contains('complete');
            }
        }))

    }

    function setEditTaskFields(taskId) {
        const popup = document.querySelector('.edit-task-popup');
        popup.style.display = 'flex';
        const task = selectDisplayedProject().items.filter(task => task.id == taskId)[0];

        let title = document.querySelector('#edit-task-form #title');
        let description = document.querySelector('#edit-task-form .description');
        let dueDate = document.querySelector('#edit-task-form #due-date');

        title.value = task.title;
        description.value = task.description;
        dueDate.value = task.dueDate;
        document.querySelectorAll('#edit-task-form .priority-container input').forEach(radio => {
            if (task.priority == radio.value) radio.checked = true;
        });
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
                if (radio.checked) project.items[byId.indexOf(taskId)] = Item(title, description, dueDate, radio.value, project);
            });
            const displayed = selectDisplayedProject();
            if (displayed.id == '9998') document.querySelector('.today').click();
            else if (displayed.id == '9997') document.querySelector('.week').click();
            displayProject(displayed);
            closeForm();
        })

        const close = document.querySelector('.close-edit');
        close.addEventListener('click', ()=> closeForm());
        
        
    }

    function hideOnClickOutside(element) {
        const outsideClickListener = event => {
            const id = event.target.id
            if (id != element.id && !event.target.closest(element.id) && id != 'new-task') {
                console.log(event.target)
                element.style.display = 'none';
                removeClickListener();
            }
        }
        const testParents = (el) => {
            while (el) {
                el = el.parentNode;
                if (el.id == element.id) return false;
            }
            return true;

        }
        const removeClickListener = () => {
            document.removeEventListener('click', outsideClickListener);
        }
        document.addEventListener('click', outsideClickListener);
    }

    function formatDate(date) {
        date = new Date(date.replace(/-/g, '\/'));
        return date.toLocaleDateString([], {
            month: 'short',
            day: 'numeric',
        })
    }

    function addProjectButtonClickEvents(addItem, removeProject, project, byPriority, byDate) {
        const taskFormContainer = document.querySelector('.new-task-popup');
        const taskForm = document.getElementById('new-task-form');
        taskForm.addEventListener('submit', submitForm);
        addItem.addEventListener('click', () => {
            taskFormContainer.style.display = 'flex';
            //hideOnClickOutside(taskFormContainer);
            
        })
        
        let cancel = document.querySelector('.close');
        cancel.addEventListener('click', () => {
            taskFormContainer.style.display = 'none';
            taskForm.reset();
        })
        removeProject.addEventListener('click', ()=> {
            document.getElementById(`sidebar-${project.id}`).remove();
            Main.removeProject(project);
            removeAllChildren(document.querySelector('.project-display'));
        });
        byPriority.addEventListener('click', sortByPriority);
        byDate.addEventListener('click', sortByDate);
        function submitForm(e) {
            project = selectDisplayedProject();
            let title = document.querySelector('.new-task-popup #title').value;
            let description = document.querySelector('.new-task-popup .description').value;
            let dueDate = document.querySelector('.new-task-popup #due-date').value;
            document.querySelectorAll('.new-task-popup .priority-container input').forEach(radio => {
                if (radio.checked && title && dueDate) {
                    project.addItem(Item(title, description, dueDate, radio.value, project));
                }
            });
            taskFormContainer.style.display = 'none';
            displayProject(project);
            taskForm.reset();
            taskForm.removeEventListener('submit', submitForm);
        }

        function sortByPriority(e) {
            const priorities = ['low', 'medium', 'high'];
            project.items = project.items.sort((a, b) => priorities.indexOf(b.priority) - priorities.indexOf(a.priority));
            byPriority.classList.add('selected-priority');
            byDate.classList.remove('selected-priority');
            displayProject(project);
            
        }

        function sortByDate(e) {
            project.items = project.items.sort((a, b) => Main.getDate(a.dueDate) - Main.getDate(b.dueDate));
            displayProject(project);
            byPriority.classList.remove('selected-priority');
            byDate.classList.add('selected-priority');
        }
        
    }

    function selectDisplayedProject() {
        const byId = Main.projects.map(e => e.id);
        let currentId = document.querySelector('.project-display').id;
        let project = Main.projects[byId.indexOf(currentId)];
        return project ? project : Main.inbox;
    }
    function removeAllChildren(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    //create a form for input. accepts type as argument, which can be 'project' or 'item'
    function createProjectNameForm() {
        document.querySelector('.new-project').style.display = 'none';

        let container = document.querySelector('.add-project').cloneNode(true);
        container.classList.remove('add-project');
        container.id = 'add-project';

        sidebar.appendChild(container);
    }

    return {createProjectNameForm, addProjectToSidebar, displayProject, createItemElements};
})();

export default DOMManipulation;