//TODO: Get rid of the INTERVAL 3 hours - this will break if we're on another country or daylight savings time
//We need to save the date as UTC and remove this later.
let getAssingments = () => {
    return `SELECT ass.*,
       cr.title,
       cr.piazza_id,
       cr.year,
       cr.drive_lectures_url,
       cr.drive_recitations_url
FROM
  (SELECT *
   FROM assignments AS ass
   WHERE end_date > CURRENT_TIMESTAMP + INTERVAL '3 hours' ) AS ass
LEFT JOIN courses AS cr ON ass.course_id = cr.id
ORDER BY end_date ASC;`;
}

let saveAssignment = () => {
    return `INSERT INTO assignments (homework_url, course_id, ex, end_date, moodle_id) 
        VALUES ($1, $2, $3, $4, $5)`;
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment
};

module.exports = service;