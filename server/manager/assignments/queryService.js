let getAssingments = (classIds) => {
    return `SELECT ass.*
FROM
  (SELECT *
   FROM assignments AS ass
   WHERE end_date > CURRENT_TIMESTAMP + INTERVAL '-1 days' ) AS ass
LEFT JOIN courses AS cr ON ass.course_id = cr.id WHERE cr.class_id IN (${classIds})
ORDER BY end_date ASC`;
}

let saveAssignment = () => {
    return `INSERT INTO assignments (homework_url, course_id, title, end_date, moodle_id, information) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
}

let editAssignment = (id) => {
    return `UPDATE assignments SET (homework_url, course_id, title, end_date, moodle_id, information)
     = ($1, $2, $3, $4, $5, $6)
  WHERE id = ${id}`;
}

let deleteAssignment = (assignmentId) => {
    return `DELETE FROM assignments WHERE id = ${assignmentId}`;
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment,
    editAssignment: editAssignment,
    deleteAssignment: deleteAssignment
};

module.exports = service;