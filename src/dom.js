import Item from './item';
import Main from './index';

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
        removeAllChildren(container);
        let name = document.createElement('div')
        name.textContent = project.name;

        let description = document.createElement('div');
        description.textContent = project.description;

        let dropDown = createDropDown(project);

        let addItemBtn = document.createElement('button');
        addItemBtn.textContent = 'Add To-Do';

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Project';

        addProjectButtonClickEvents(addItemBtn, removeBtn, project);
        
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(dropDown);
        if (project.items.length) {
            container.appendChild(createItemElements(project));
        }
        container.appendChild(addItemBtn);
        container.appendChild(removeBtn);
        
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
    function createItemElements(project) {
        const items = project.items;
        const container = document.createElement('div');
        container.classList.add('items-container');
        items.forEach((item, i) => {
            let itemElement = document.createElement('div');
            itemElement.classList.add('todo-item');
            if (item['complete']) itemElement.classList.add('complete');
            itemElement.id = item.id;

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            itemElement.appendChild(checkbox);
            let keys = ['title', 'dueDate', 'priority'];
            
            keys.forEach(key => {
                let field = document.createElement('div');
                field.textContent = item[key];

                itemElement.appendChild(field)
            })
            container.appendChild(itemElement);
        })
        return container;
    }



    function addProjectButtonClickEvents(addItem, removeProject, project) {
        addItem.addEventListener('click', () => {
            createForm('item');
            let submit = document.getElementById('submit');
            submit.addEventListener('click', () => {
                let title = document.querySelector('.title input').value;
                let description = document.querySelector('.description input').value;
                let dueDate = document.querySelector('.due-date input').value;
                let radios = document.getElementsByName('priority');
                radios.forEach(radio => {
                    if (radio.checked) {
                        project.addItem(Item(title, description, dueDate, radio.value, project))
                    }
                })
                document.getElementById('form').remove();
                displayProject(project);

            })
        })

        removeProject.addEventListener('click', ()=> {
            document.getElementById(`sidebar-${project.id}`).remove();
            Main.removeProject(project);
            removeAllChildren(document.querySelector('.project-display'));
        });
    }

    function removeAllChildren(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    //create a form for input. accepts type as argument, which can be 'project' or 'item'
    function createForm(type) {
        let fields = type == 'project' ? ['Name', 'Description'] : ['Title', 'Description', 'Due Date', 'Priority'];
        let form = createInputFields(fields);
        form.id = 'form';
        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.id = 'submit';
        form.appendChild(submitButton);
        type == 'project' ? sidebar.appendChild(form) : body.appendChild(form);
    }
    //creates radio buttons and labels for radio buttons for priority
    function createPriorityRadios() {
        const levels = ['Low', 'Medium', 'High'];
        let container = document.createElement('div');
        container.classList.add('priority-container');
        const containerLabel = document.createElement('label');
        containerLabel.textContent = 'Priority:  ';
        container.appendChild(containerLabel);
        levels.forEach(level => {
            let radio = document.createElement('input');
            let label = document.createElement('label');
            label.for = level.toLowerCase();
            label.textContent = level;
            radio.type = 'radio';
            radio.name = 'priority';
            radio.value = level;
            radio.id = level.toLowerCase();
            container.appendChild(radio);
            container.appendChild(label);
        })
        return container;
    }
    //create input elements appropriately for different fields
    function createInputFields(fieldNames) {
        let container = document.createElement('div');
        fieldNames.forEach(field => {
            let fieldContainer = document.createElement('div');
            fieldContainer.classList.add(field.toLowerCase().replace(' ', '-'));
            if (field == 'Priority') {
                container.appendChild(createPriorityRadios());
            } else {
                let input = document.createElement('input');
                if (field == 'Due Date') {
                    input.type = 'date';
                    let label = document.createElement('label');
                    label.textContent = 'Due Date:  ';
                    fieldContainer.appendChild(label);
                }
                input.placeholder = field;
                fieldContainer.appendChild(input);
                container.appendChild(fieldContainer)
            }
        })
        return container;
    }
    return {createForm, addProjectToSidebar};
})();

export default DOMManipulation;