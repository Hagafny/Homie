let getCoursesBasic = (classIds) => {
    return `SELECT id, title FROM courses WHERE class_id IN (${classIds}) ORDER BY title`;
}

let getCourses = (classIds) => {
    return `SELECT id, 
    title, piazza_id,
    drive_lectures_url, 
    classboost_id,
    moodle_course_id,
    class_id 
    FROM courses WHERE class_id IN (${classIds}) ORDER BY title`;
}

let saveCourse = () => {
    return `INSERT INTO courses (title, drive_lectures_url, piazza_id, classboost_id, class_id, moodle_course_id, year) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
}

let editCourse = (courseId) => {
    return `UPDATE courses SET (title, drive_lectures_url, piazza_id, classboost_id, moodle_course_id, class_id)
     = ($1, $2, $3, $4, $5, $6)
  WHERE id = ${courseId}`;
}

let deleteCourse = (courseId) => {
    return `DELETE FROM courses WHERE id = ${courseId}`;
}

let service = {
    getCoursesBasic: getCoursesBasic,
    getCourses: getCourses,
    saveCourse: saveCourse,
    editCourse: editCourse,
    deleteCourse: deleteCourse
};

module.exports = service;