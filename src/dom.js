import Item from './item';

const DOMManipulation = (() => {

    const body = document.querySelector('body');
    //generate element to display information for a given todo list item
    function createListItem(item) {

    }
    //generate element to display information for a given project
    function createProject(project) {
        const container = document.createElement('div');
    }
    //add name of project to list in sidebar. also add event listener so that when clicked, the projects information is displayed
    function addProjectToSidebar(project) {
        const container = document.querySelector('.projects-container');
        let toAdd = document.createElement('div');
        toAdd.textContent = project.name;
        toAdd.id = `sidebar-${project.name.toLowerCase()}`;
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

        let addItemBtn = document.createElement('button');
        addItemBtn.textContent = 'Add To-Do';

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Project';

        addProjectButtonClickEvents(addItemBtn, removeBtn, project);
        
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(addItemBtn);
        container.appendChild(removeBtn);
        
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
                        project.addItem(Item(title, description, dueDate, radio.value))
                        console.log(project.items)
                    }
                })

                document.getElementById('form').remove();

            })
        })

        removeProject.addEventListener('click', ()=> {
            document.getElementById(`sidebar-${project.name}`).remove();
            removeAllChildren(container);
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
        body.appendChild(form);
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