//factory function for creating objects for todo items
const TodoItem = (title, description, dueDate, priority) => {
    let complete = false;

    const toggleComplete = () => complete = !complete;

    const markComplete = () => complete = true;
    const markIncomplete = () => complete = false;

    return {title, description, dueDate, priority, markComplete, markIncomplete, complete};
}

export default TodoItem;