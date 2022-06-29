//factory function for creating objects for projects
const Project = (name, projects, isInbox = false, isToday = false, isWeek = false) => {
    const items = [];

    const addItem = (item) => items.push(item);

    const getUniqueId = () => {
        let otherIds = projects.filter(project => !['9999', '9998', '9997'].includes(project.id)).map(e => Number(e.id.match(/\d{3}$/)[0]));
        if (!otherIds.length) {
         return `000`;
        } else {
         let largest = Math.max(...otherIds);
         if (largest === 9996) largest = 9999;
         return (largest + 1).toString().padStart(3, '0');
        }
    }

    const removeItem = (itemId) => {
        let byId = items.map(e => e.id);
        items.splice(byId.indexOf(itemId), 1);
    }

    const id = isInbox ? '9999' : isToday ? '9998' : isWeek ? '9997' : getUniqueId();

    return {name, addItem, items, id, removeItem};
}

export default Project;
