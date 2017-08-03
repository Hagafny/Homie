const logicService = require('../../manager/logicService');

let getCoursesById = (req, res) => {
    let classId = req.params.id;
    logicService.getCourses(classId, (courses) => {
        res.json(courses);
    });
}

module.exports = {
    getCoursesById: getCoursesById
}