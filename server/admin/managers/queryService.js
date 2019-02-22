const getManager = managerId => `SELECT * FROM public.managers WHERE id = ${managerId}`;

const getManagers = () => `SELECT * FROM public.managers WHERE class_ids != '0' ORDER BY id`;

const saveManager = () =>
  `INSERT INTO public.managers (email, password, class_ids) 
        VALUES ($1, $2, $3) RETURNING id`;

const editManager = managerId =>
  `UPDATE public.managers SET (email, password, class_ids)  = ($1, $2, $3)
     WHERE id = ${managerId}`;

const deleteManager = managerId => `DELETE FROM managers WHERE id = ${managerId}`;

const getManagerByEmailAndPassword = (email, password) =>
  `SELECT * from public.managers WHERE email = '${email}' AND password = '${password}'`;

const service = {
  getManager,
  getManagers,
  getManagerByEmailAndPassword,
  saveManager,
  editManager,
  deleteManager
};

module.exports = service;
