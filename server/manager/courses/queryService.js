const getCoursesBasic = classIds =>
  `SELECT id, title, moodle_course_id FROM public.courses WHERE class_id IN (${classIds}) ORDER BY title`;

const getCourses = classIds =>
  `SELECT id, 
    title, piazza_id,
    drive_lectures_url, 
    classboost_id,
    moodle_course_id,
    class_id,
    trello_id
    FROM public.courses WHERE class_id IN (${classIds}) ORDER BY title`;

const saveCourse = () =>
  `INSERT INTO public.courses (title, drive_lectures_url, piazza_id, classboost_id, class_id, moodle_course_id, year, trello_id) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;

const editCourse = courseId =>
  `UPDATE public.courses SET (title, drive_lectures_url, piazza_id, classboost_id, moodle_course_id, class_id, trello_id)
     = ($1, $2, $3, $4, $5, $6, $7)
  WHERE id = ${courseId}`;

const deleteCourse = courseId => `DELETE FROM public.courses WHERE id = ${courseId}`;

const service = {
  getCoursesBasic,
  getCourses,
  saveCourse,
  editCourse,
  deleteCourse
};

module.exports = service;
