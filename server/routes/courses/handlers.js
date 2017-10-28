const logicService = require('../../manager/courses/logicService');

let getCoursesBasic = (req, res) => {
    let classIds = req.params.ids.split('&');
    logicService.getCoursesBasic(classIds, (courses) => {
        res.json(courses);
    });
}

let getCourses = (req, res) => {
    let classIds = req.params.ids.split('&');
    logicService.getCourses(classIds, (courses) => {
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
    getCoursesBasic, getCoursesBasic,
    getCourses: getCourses,
    save: save,
    edit: edit,
    remove: remove
}