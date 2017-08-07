let getCoursesBasic = (classId) => {
    return `SELECT id, title FROM courses WHERE class_id = ${classId}`;
}

let getCourses = (classId) => {
    return `SELECT id, 
    title, piazza_id,
    drive_lectures_url, 
    drive_recitations_url, 
    classboost_id
    FROM courses WHERE class_id = ${classId}`;
}

let saveCourse = () => {
    return `INSERT INTO courses (title, drive_lectures_url, drive_recitations_url, piazza_id, classboost_id, class_id, year) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
}

let editCourse = (classId) => {
    return `UPDATE courses SET (title, drive_lectures_url, drive_recitations_url, piazza_id, classboost_id)
     = ($1, $2, $3, $4, $5)
  WHERE id = ${classId}`;
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