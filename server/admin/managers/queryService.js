const getManager = managerId => `SELECT * FROM managers WHERE id = ${managerId}`;

const getManagers = () => `SELECT * FROM managers WHERE class_ids != '0' ORDER BY id`;

const saveManager = () =>
  `INSERT INTO managers (email, password, class_ids) 
        VALUES ($1, $2, $3) RETURNING id`;

const editManager = managerId =>
  `UPDATE managers SET (email, password, class_ids)  = ($1, $2, $3)
     WHERE id = ${managerId}`;

const deleteManager = managerId => `DELETE FROM managers WHERE id = ${managerId}`;

const getManagerByEmailAndPassword = (email, password) =>
  `SELECT * from managers WHERE email = '${email}' AND password = '${password}'`;

const service = {
  getManager,
  getManagers,
  getManagerByEmailAndPassword,
  saveManager,
  editManager,
  deleteManager
};

module.exports = service;
