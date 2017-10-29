let getManagers = () => {
    return `SELECT * FROM managers WHERE class_ids != '0' ORDER BY id`;
}

let saveManager = () => {
    return `INSERT INTO managers (email, password, class_ids) 
        VALUES ($1, $2, $3) RETURNING id`;
}

let editManager = (managerId) => {
    return `UPDATE managers SET (email, password, class_ids)  = ($1, $2, $3)
     WHERE id = ${managerId}`;
}

let deleteManager = (managerId) => {
    return `DELETE FROM managers WHERE id = ${managerId}`;
}

let getManagerByEmailAndPassword = (email, password) => {
    return `SELECT * from managers WHERE email = '${email}' AND password = '${password}'`;
}

let service = {
    getManagers: getManagers,
    getManagerByEmailAndPassword: getManagerByEmailAndPassword,
    saveManager: saveManager,
    editManager: editManager,
    deleteManager: deleteManager
};

module.exports = service;