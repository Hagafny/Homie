const getClassesBasic = classIds =>
  `SELECT id, name FROM public.classes WHERE id IN (${classIds}) ORDER BY id ASC`;

const getClasses = () => `SELECT * FROM public.classes ORDER BY id ASC`;

const saveClass = () =>
  `INSERT INTO public.classes (name, starting_year) 
        VALUES ($1, $2) RETURNING id`;

const editClass = classId =>
  `UPDATE public.classes SET (name, starting_year) = ($1, $2)
     WHERE id = ${classId}`;

const deleteClass = classId => `DELETE FROM public.classes WHERE id = ${classId}`;

const service = {
  getClassesBasic,
  getClasses,
  saveClass,
  editClass,
  deleteClass
};

module.exports = service;
