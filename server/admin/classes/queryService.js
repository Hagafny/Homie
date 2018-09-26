const getClassesBasic = classIds =>
  `SELECT id, name FROM classes WHERE id IN (${classIds}) ORDER BY id ASC`;

const getClasses = () => `SELECT * FROM classes ORDER BY id ASC`;

const saveClass = () =>
  `INSERT INTO classes (name, starting_year) 
        VALUES ($1, $2) RETURNING id`;

const editClass = classId =>
  `UPDATE classes SET (name, starting_year) = ($1, $2)
     WHERE id = ${classId}`;

const deleteClass = classId => `DELETE FROM classes  WHERE id = ${classId}`;

const service = {
  getClassesBasic,
  getClasses,
  saveClass,
  editClass,
  deleteClass
};

module.exports = service;
