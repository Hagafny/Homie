//TODO: Get rid of the INTERVAL 3 hours - this will break if we're on another country or daylight savings time
//We need to save the date as UTC and remove this later.
let getAssingments = () => {
    return `SELECT ass.*,
       cr.title,
       cr.piazza_url
FROM
  (SELECT *
   FROM assignments AS ass
   WHERE end_date > CURRENT_TIMESTAMP + INTERVAL '3 hours' ) AS ass
LEFT JOIN courses AS cr ON ass.course_id = cr.id
ORDER BY CURRENT_TIMESTAMP ASC;`;
}

let saveAssignment = () => {
    return `INSERT INTO assignments (title, end_date, moodle_url, piazza_url, homework_url) 
        VALUES ($1, $2, $3, $4, $5)`;
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment
};

module.exports = service;