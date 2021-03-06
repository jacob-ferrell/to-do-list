
//factory function for creating objects for todo items
const Task = (title, description, dueDate, priority, project, complete = false) => {
    //create a unique id for each task by making each new task's id 1 more than the highest number id
    const getUniqueId = () => {
       let otherIds = project.items.map(e => Number(e.id.match(/\d{3}$/)));
       if (!otherIds.length) {
        return `${project.id}-000`;
       } else {
        let largest = Math.max(...otherIds);
        return `${project.id}-${(largest + 1).toString().padStart(3, '0')}`
       }
    }

    const id = getUniqueId();


    return {title, description, dueDate, priority, complete, id};
}

export default Task;