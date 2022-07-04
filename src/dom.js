import Item from './item';
import Main from './index';
import Events from './events';

const DOMManipulation = (() => {

    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

    //add name of project to list in sidebar. also add event listener so that when clicked, the projects information is displayed
    function addProjectToSidebar(project, projects) {
        const container = document.querySelector('.projects-container');
        let toAdd = document.createElement('div');
        let projectName = document.createElement('div');
        let taskCount = document.querySelector('body > .task-count-template').cloneNode(true);
        toAdd.appendChild(projectName);
        toAdd.appendChild(taskCount);
        projectName.textContent = project.name;
        toAdd.id = `sidebar-${project.id}`;
        toAdd.addEventListener('click', ()=> displayProject(project));
        container.appendChild(toAdd);
    }
    //dynamically create elements for a project and all its elements to be displayed
    function displayProject(project, isLoad = false) {
        if(project.items.length && !isLoad) { 
            Main.getTaskCounts();
            Main.sortByCompleted(project);
        }
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
         Events.addProjectButtonClickEvents(addItemBtn, removeBtn, project, sortPriority, sortDate);
        if (project.items.length) {
            container.appendChild(createItemElements(project.items));
        }
    }
    //dynamically create an element for all items in a project for displayal
    function createItemElements(items) {
        const container = document.createElement('div');
        container.classList.add('items-container');
        items.forEach((item, i) => {
            let itemElement = document.createElement('div');
            itemElement.classList.add('todo-item');
            if (item['complete']) itemElement.classList.add('complete');
            itemElement.id = item.id;

            let checkbox;
            if (item.complete) checkbox = document.querySelector('.checked').cloneNode(true);
            else checkbox = document.querySelector('.unchecked').cloneNode(true);
            checkbox.classList.add('checkbox');
            checkbox.style.display = 'block';

            let buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('item-buttons-container');

            let edit = document.querySelector('.edit-task-button').cloneNode(true);
            edit.classList.add('edit');
            edit.classList.remove('edit-task-button');
            edit.id = `edit-${item.id}`;
            
            let deleteBtn = document.querySelector('.delete-task-button').cloneNode(true);
            deleteBtn.classList.add('delete');
            deleteBtn.classList.remove('delete-task-button');
            deleteBtn.id = `delete-${item.id}`

            Events.addItemEvents(checkbox, edit, deleteBtn);
        
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
    //display a popup form for editing where all the fields already contain the information for the selected task to be edited
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
    //shorten a given date for display in an item element
    function formatDate(date) {
        date = new Date(date.replace(/-/g, '\/'));
        return date.toLocaleDateString([], {
            month: 'short',
            day: 'numeric',
        })
    }
    //select the Project object of whichever project is currently on display
    function selectDisplayedProject() {
        const byId = Main.projects.map(e => e.id);
        let currentId = document.querySelector('.project-display').id;
        let project = Main.projects[byId.indexOf(currentId)];
        return project ? project : Main.inbox;
    }
    //remove all children of a given element
    function removeAllChildren(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    //create the form for supplying the name of a new project
    function createProjectNameForm() {
        document.querySelector('.new-project').style.display = 'none';

        let container = document.querySelector('.add-project').cloneNode(true);
        container.classList.remove('add-project');
        container.id = 'add-project';

        document.querySelector('.sidebar').appendChild(container);
    }

    return {createProjectNameForm, addProjectToSidebar, displayProject, selectDisplayedProject, setEditTaskFields, removeAllChildren};
})();

export default DOMManipulation;