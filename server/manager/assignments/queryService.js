const getAssingments = classIds =>
  `SELECT ass.*
FROM
  (SELECT *
   FROM assignments AS ass
   WHERE end_date > CURRENT_TIMESTAMP + INTERVAL '-1 days' ) AS ass
LEFT JOIN courses AS cr ON ass.course_id = cr.id WHERE cr.class_id IN (${classIds})
ORDER BY end_date ASC,id ASC`;

const saveAssignment = () =>
  `INSERT INTO assignments (homework_url, course_id, title, end_date, moodle_id, information) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;

const editAssignment = id =>
  `UPDATE assignments SET (homework_url, course_id, title, end_date, moodle_id, information)
     = ($1, $2, $3, $4, $5, $6)
  WHERE id = ${id}`;

const deleteAssignment = assignmentId => `DELETE FROM assignments WHERE id = ${assignmentId}`;

const service = {
  getAssingments,
  saveAssignment,
  editAssignment,
  deleteAssignment
};

module.exports = service;
