const DOMManipulation = (() => {

    const body = document.querySelector('body');
    //generate element to display information for a given todo list item
    function createListItem(item) {

    }
    //generate element to display information for a given project
    function createProject(project) {

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
    return {createForm};
})();

export default DOMManipulation;