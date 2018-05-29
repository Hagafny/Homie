const dataService = require('./dataService');

let getCoursesBasic = (classIds, cb) => {
    dataService.getCoursesBasic(classIds, (rows) => {
        let modifiedRows = rows.map(courseBasicMapper);
        cb(modifiedRows);
    });
}

let getCourses = (classIds, cb) => {
    dataService.getCourses(classIds, (rows) => { 
        let modifiedRows = rows.map(courseMapper);
        cb(modifiedRows);
    });
}

let saveCourse = (course, cb) => {
    course.year = new Date().getFullYear();
    dataService.saveCourse(course, cb);
}

let editCourse = (course, cb) => {
    dataService.editCourse(course, cb);
}

let deleteCourse = (courseId, cb) => {
    dataService.deleteCourse(courseId, cb);
}

let service = {
    getCoursesBasic: getCoursesBasic,
    getCourses: getCourses,
    saveCourse: saveCourse,
    editCourse: editCourse,
    deleteCourse: deleteCourse
};

module.exports = service;

let courseBasicMapper = (course) => {
    const currentSchoolYear = 2018;
    const moodleUrl = `http://moodle.idc.ac.il/${currentSchoolYear}/course/view.php?id=${course.moodle_course_id}`;
    return {
        value: course.id,
        text: course.title,
        url: moodleUrl
    }
}

let courseMapper = (course) => {
    return {
        id: course.id,
        class_id: course.class_id,
        title: course.title,
        drive_lectures_url: course.drive_lectures_url ? course.drive_lectures_url: "",
        classboost_id: course.classboost_id ? course.classboost_id : "" ,
        piazza_id: course.piazza_id ? course.piazza_id : "",
        moodle_course_id: course.moodle_course_id ? course.moodle_course_id: "",
        trello_id: course.trello_id ? course.trello_id: ""
    }
}