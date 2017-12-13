let getClassesBasic = (classIds) => {
    return `SELECT id, name FROM classes WHERE id IN (${classIds}) ORDER BY id ASC`;
}

let getClasses = () => {
    return `SELECT * FROM classes ORDER BY id ASC`;
}

let saveClass = () => {
    return `INSERT INTO classes (name, starting_year) 
        VALUES ($1, $2) RETURNING id`;
}

let editClass = (classId) => {
    return `UPDATE classes SET (name, starting_year) = ($1, $2)
     WHERE id = ${classId}`;
}

let deleteClass = (classId) => {
    return `DELETE FROM classes  WHERE id = ${classId}`;
}

let service = {
    getClassesBasic: getClassesBasic,
    getClasses: getClasses,
    saveClass: saveClass,
    editClass: editClass,
    deleteClass: deleteClass
};

module.exports = service;