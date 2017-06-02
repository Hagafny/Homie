//TODO: Get rid of the INTERVAL 3 hours - this will break if we're on another country or daylight savings time
//We need to save the date as UTC and remove this later.
let getAssingments = (classId) => {
    return `SELECT ass.*,
       cr.title,
       cr.piazza_id,
       cr.year,
       cr.drive_lectures_url,
       cr.drive_recitations_url,
       cr.classboost_id
FROM
  (SELECT *
   FROM assignments AS ass
   WHERE end_date > CURRENT_TIMESTAMP + INTERVAL '3 hours' ) AS ass
LEFT JOIN courses AS cr ON ass.course_id = cr.id WHERE cr.class_id = ${classId}
ORDER BY end_date ASC;`;
}

let saveAssignment = () => {
    return `INSERT INTO assignments (homework_url, course_id, ex, end_date, moodle_id) 
        VALUES ($1, $2, $3, $4, $5)`;
}

let getCourses = (classId) => {
    return `SELECT id, title from courses where class_id = ${classId}`;
}


let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment,
    getCourses: getCourses
};

module.exports = service;