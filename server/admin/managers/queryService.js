let getManagers = () => {
    return `SELECT * FROM managers WHERE class_id != 0 ORDER BY id`;
}

let saveManager = () => {
    return `INSERT INTO managers (email, password, class_id) 
        VALUES ($1, $2, $3) RETURNING id`;
}

let editManager = (managerId) => {
    return `UPDATE managers SET (email, password, class_id)  = ($1, $2, $3)
     WHERE id = ${managerId}`;
}

let deleteManager = (managerId) => {
    return `DELETE FROM managers WHERE id = ${managerId}`;
}

let service = {
    getManagers: getManagers,
    saveManager: saveManager,
    editManager: editManager,
    deleteManager: deleteManager
};

module.exports = service;