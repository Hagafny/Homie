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

let service = {
    getAssingments: getAssingments
};

module.exports = service;