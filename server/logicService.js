const dataService = require('./dataService');

let getAssingments = (cb) => {
    dataService.getAssingments((rows) => {
        let modifiedRows = rows.map(assignmentMapper);
        cb(modifiedRows);
    })
}

let getHardcodedAssingments = (cb) => {
    let assignments = [{
        id: 'a23',
        title: 'C',
        end_date: new Date("2017-05-23 16:00.000"),
        ex: '3',
        resources:
        {
            homework: 'http://moodle.idc.ac.il/2017/mod/resource/view.php?id=62662',
            moodle: null,
            piazza: 'j0jo4j7ubbn1ta',
            lecture: null,
            recitation: null
        }
    },
    {
        id: 'a18',
        title: 'Logic & Set Theory',
        end_date: new Date("2017-05-26 11:00.000"),
        ex: '5',
        resources:
        {
            homework: 'http://moodle.idc.ac.il/2017/pluginfile.php/111447/mod_assign/introattachment/0/%D7%AA%D7%A8%D7%92%D7%99%D7%9C%205%20%D7%9C%D7%94%D7%92%D7%A9%D7%94.pdf?forcedownload=1',
            moodle: 'http://moodle.idc.ac.il/2017/mod/assign/view.php?id=63441',
            piazza: 'j0mrx8zh59v5q',
            lecture: 'https://drive.google.com/drive/u/0/folders/0B1JeY27hUc82YkJmTHNad1dlUWc',
            recitation: 'https://drive.google.com/drive/u/0/folders/0B1JeY27hUc82MWQ2QWpYRDZuczA'
        }
    },
    {
        id: 'a1',
        title: 'Linear 2',
        end_date: new Date("2017-05-26 18:00.000"),
        ex: '5',
        resources:
        {
            homework: 'http://moodle.idc.ac.il/2017/pluginfile.php/113477/mod_assign/introattachment/0/%D7%AA%D7%A8%D7%92%D7%99%D7%9C%205.pdf?forcedownload=1',
            moodle: 'http://moodle.idc.ac.il/2017/mod/assign/view.php?id=65306',
            piazza: 'j0s8cu8n65945w',
            lecture: 'https://drive.google.com/drive/u/0/folders/0B1JeY27hUc82djdBdjdmWmx5N1E',
            recitation: null
        }
    },
    {
        id: 'a20',
        title: 'Calculus 2',
        end_date: new Date("2017-05-28 22:55.000"),
        ex: '6',
        resources:
        {
            homework: 'http://moodle.idc.ac.il/2017/pluginfile.php/113607/mod_assign/introattachment/0/Exercise%206.pdf?forcedownload=1',
            moodle: 'http://moodle.idc.ac.il/2017/mod/assign/view.php?id=65409',
            piazza: null,
            lecture: 'https://drive.google.com/drive/u/0/folders/0B1JeY27hUc82NDBHeWR5dV9IUXM',
            recitation: 'https://drive.google.com/drive/u/0/folders/0B1JeY27hUc82VnFDZ3pKUzJPNHc'
        }
    },
    {
        id: 'a22',
        title: 'Data Structures',
        end_date: new Date("2017-05-29 08:00.000"),
        ex: '3',
        resources:
        {
            homework: 'http://moodle.idc.ac.il/2017/pluginfile.php/111380/mod_assign/introattachment/0/DS2017Ex3.pdf?forcedownload=1',
            moodle: 'http://moodle.idc.ac.il/2017/mod/assign/view.php?id=63381',
            piazza: null,
            lecture: null,
            recitation: 'https://drive.google.com/drive/u/0/folders/0B1JeY27hUc82aHZnelNBWUhESTg'
        }
    }]
    cb(assignments);
}

let service = {
    getAssingments: getAssingments,
    getHardcodedAssingments: getHardcodedAssingments
};

module.exports = service;

let assignmentMapper = (assignment) => {
    var moodleUrl = assignment.moodle_id ? `http://moodle.idc.ac.il/${assignment.year}/mod/assign/view.php?id=${assignment.moodle_id}` : null;

    return {
        id: `a${assignment.id}`,
        title: assignment.title,
        end_date: assignment.end_date,
        ex: assignment.ex,
        resources: {
            homework: assignment.homework_url,
            moodle: moodleUrl,
            piazza: assignment.piazza_id,
            lecture: assignment.drive_lectures_url,
            recitation: assignment.drive_recitations_url
        }
    }
}