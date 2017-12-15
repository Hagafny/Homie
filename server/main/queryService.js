//TODO: Get rid of the INTERVAL 3/2 hours - this will break if we're on another country or daylight savings time
//We need to save the date as UTC and remove this later.
const getAssingments = (classIds) => {
    const inIds = classIds.join(',');
    return `SELECT ass.*, cr.id as course_id,
       cr.title as course_title,
       cr.piazza_id,
       cr.drive_lectures_url,
       cr.drive_recitations_url,
       cr.classboost_id,
       cr.moodle_course_id
FROM
  (SELECT *
   FROM assignments AS ass
   WHERE end_date > CURRENT_TIMESTAMP + INTERVAL '2 hours' ) AS ass
LEFT JOIN courses AS cr ON ass.course_id = cr.id WHERE cr.class_id IN (${classIds})
  ORDER BY end_date ASC;`;
}

let service = {
    getAssingments: getAssingments
};

module.exports = service;