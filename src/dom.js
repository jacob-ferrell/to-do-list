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

        let taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        let description = document.createElement('div');
        description.textContent = project.description;

        let dropDown = createDropDown(project);

        let addItemBtn = document.createElement('button');
        addItemBtn.textContent = '+ Task';
        addItemBtn.id = 'add-item-button';

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Project';

        heading.appendChild(name);
        heading.appendChild(removeBtn);
        if (['9999', '9998', '9997'].includes(container.id)) removeBtn.style.display = 'none';
        container.appendChild(heading);
        container.appendChild(addItemBtn);
        if (['9998', '9997'].includes(container.id)) addItemBtn.style.display = 'none';
        container.appendChild(taskContainer);
         addProjectButtonClickEvents(addItemBtn, removeBtn, project);
        container.appendChild(description);
        container.appendChild(dropDown);
        if (project.items.length) {
            container.appendChild(createItemElements(project.items));
        }
        
    }

    function createDropDown(project) {
        const container = document.createElement('div');
        container.classList.add('dropdown');

        const btn = document.createElement('button');
        btn.textContent = 'Mark As';
        btn.classList.add('dropbtn');
        let dropdown = document.querySelector('.dropdown-content')
        btn.addEventListener('click', ()=> document.querySelector('.dropdown-content').style.display = 'flex');
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn') && document.querySelector('.dropdown-content')) document.querySelector('.dropdown-content').style.display = 'none';
        }
        container.appendChild(btn);

        const content = document.createElement('div');
        content.classList.add('dropdown-content');
        container.appendChild(content);

        const itemText = ['Complete', 'Incomplete'];
        itemText.forEach((text, i) => {
            let item = document.createElement('a');
            item.id = text.toLowerCase();
            item.addEventListener('click', (e) => {
                getCheckedItems().forEach(check => project.items.forEach(item => {
                    if (item.id == check.id) {
                        if (e.target.id == 'complete') {
                        item.complete = true;
                        check.classList.add('complete');
                        } else {
                            item.complete = false;
                            check.classList.remove('complete');
                        }
                    }
                }))
            })
            item.textContent = text;
            content.appendChild(item);
        })
        return container;
    }

    function getCheckedItems() {
        let checked = [];
        const boxes = document.querySelectorAll('.todo-item input');
        boxes.forEach(box => {
            if (box.checked) checked.push(box.parentNode);
            box.checked = false;
        })
        return checked;
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

            let edit = document.createElement('button');
            edit.textContent = 'Edit';
            edit.classList.add('edit');
            edit.id = `edit-${item.id}`;
            edit.addEventListener('click', (e) => {
                let taskId = document.getElementById(e.target.id).parentNode.id;
                setEditTaskFields(taskId);
                setEditTaskEvents(taskId);
            })

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');
            deleteBtn.id = `delete-${item.id}`
            deleteBtn.addEventListener('click', (event)=> {
                console.log(event.target.id)
                let parent = document.getElementById(event.target.id).parentNode;
                parent.remove();
                project.removeItem(parent.id);
            })

            itemElement.appendChild(checkbox);
            let keys = ['title', 'dueDate', 'priority'];
            
            keys.forEach(key => {
                let field = document.createElement('div');
                field.textContent = key == 'dueDate' ? formatDate(item[key]) : item[key];
                itemElement.appendChild(field)
            })

            itemElement.appendChild(edit);
            itemElement.appendChild(deleteBtn);
            container.appendChild(itemElement);
        })
        return container;
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
        const project = selectDisplayedProject()
        const byId = project.items.map(e => e.id);
        const task = selectDisplayedProject().items.filter(task => task.id == taskId)[0];
        const form = document.getElementById('edit-task-form')
        const newForm = form.cloneNode(true);  
        const closeForm = () => document.querySelector('.edit-task-popup').style.display = 'none';
        form.parentNode.replaceChild(newForm, form);
        newForm.addEventListener('submit', ()=> {
            let title = document.querySelector('#edit-task-form #title').value;
            let description = document.querySelector('#edit-task-form .description').value;
            let dueDate = document.querySelector('#edit-task-form #due-date').value;
            document.querySelectorAll('#edit-task-form .priority-container input').forEach(radio => {
                if (radio.checked) project.items[byId.indexOf(taskId)] = Item(title, description, dueDate, radio.value, selectDisplayedProject());
            });
            displayProject(selectDisplayedProject());
            closeForm();
        })

        const close = document.querySelector('.close-edit');
        close.addEventListener('click', ()=> closeForm());
        
    }

    function formatDate(date) {
        date = new Date(date.replace(/-/g, '\/'));
        return date.toLocaleDateString([], {
            month: 'short',
            day: 'numeric',
        })
    }



    function addProjectButtonClickEvents(addItem, removeProject, project) {
        const taskFormContainer = document.querySelector('.new-task-popup');
        const taskForm = document.getElementById('new-task-form');
        taskForm.addEventListener('submit', submitForm);
        addItem.addEventListener('click', () => {
            taskFormContainer.style.display = 'flex';            
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
            console.log(project);
            taskFormContainer.style.display = 'none';
            displayProject(project);
            taskForm.reset();
            taskForm.removeEventListener('submit', submitForm);
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

        let container = document.createElement('div');
        container.id = 'add-project';

        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Name';
        container.appendChild(input);

        let buttonContainer = document.createElement('div');

        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.id = 'submit';
        buttonContainer.appendChild(submitButton);

        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.id = 'cancel';
        buttonContainer.appendChild(cancelButton);

        container.appendChild(buttonContainer);
        sidebar.appendChild(container);
    }



    return {createProjectNameForm, addProjectToSidebar, displayProject, createItemElements};
})();

export default DOMManipulation;