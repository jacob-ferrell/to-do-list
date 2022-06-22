//factory function for creating objects for todo items
const TodoItem = (title, description, dueDate, priority, project) => {
    let complete = false;

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

export default TodoItem;