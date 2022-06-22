//factory function for creating objects for projects
const Project = (name, description, projects) => {
    const items = [];

    const addItem = (item) => items.push(item);

    const getUniqueId = () => {
        console.log(projects)
        let otherIds = projects.map(e => Number(e.id.match(/\d{3}$/)[0]));
       if (!otherIds.length) {
        return `000`;
       } else {
        let largest = Math.max(...otherIds);
        return (largest + 1).toString().padStart(3, '0');
       }
    }

    const id = getUniqueId();

    return {name, description, addItem, items, id};
}

export default Project;
