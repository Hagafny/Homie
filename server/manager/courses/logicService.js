const dataService = require('./dataService');

let getCoursesBasic = (classId, cb) => {
    dataService.getCoursesBasic(classId, (rows) => {
        let modifiedRows = rows.map(courseBasicMapper);
        cb(modifiedRows);
    });
}

let getCourses = (classId, cb) => {
    dataService.getCourses(classId, (rows) => {
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
    return {
        value: course.id,
        text: course.title
    }
}

let courseMapper = (course) => {
    return {
        id: course.id,
        title: course.title,
        drive_lectures_url: course.drive_lectures_url ? course.drive_lectures_url: "",
        drive_recitations_url: course.drive_recitations_url ? course.drive_recitations_url: "",
        classboost_id: course.classboost_id ? course.classboost_id : "" ,
        piazza_id: course.piazza_id ? course.piazza_id : "" 
    }
}