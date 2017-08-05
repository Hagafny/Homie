const logicService = require('../../manager/courses/logicService');

let getCoursesByIdBasic = (req, res) => {
    let classId = req.params.id;
    logicService.getCoursesBasic(classId, (courses) => {
        res.json(courses);
    });
}

let getCoursesById = (req, res) => {
    let classId = req.params.id;
    logicService.getCourses(classId, (courses) => {
        res.json(courses);
    });
}

let save = (req, res) => {
    logicService.saveCourse(req.body, (newCourseId) => {
        res.status(200).json(
            {
                status: 200,
                id: newCourseId
            });
    });
}

let edit = (req, res) => {
    logicService.editCourse(req.body, () => {
        res.status(200).json({ status: 200 });
    })
}

let remove = (req, res) => {
    let courseId = req.params.id;
    logicService.deleteCourse(courseId, () => {
        res.status(200).json({ status: 200 });
    })
}

module.exports = {
    getCoursesByIdBasic, getCoursesByIdBasic,
    getCoursesById: getCoursesById,
    save: save,
    edit: edit,
    remove: remove
}