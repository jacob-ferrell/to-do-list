//factory function for creating objects for projects
const Project = (name, description) => {
    const items = [];

    const addItem = (item) => items.push(item);

    return {name, description, addItem, items};
}

export default Project;
