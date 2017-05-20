const pg = require('pg');
pg.defaults.ssl = true;

var dbConnection = process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://jvtbnwwrwltemx:3b58a1ca37657704321d9b83da14f7c44ff41e33d8bdbc1fd27416c8caf9c97b@ec2-54-247-166-129.eu-west-1.compute.amazonaws.com:5432/d8cg3vb6m5pl2l";

let getAssingments2 = () => {
    return [{
        title: 'Linear Algebra',
        endDate: '06/08/2017 10:55 AM',
        moodle: "www.what.com",
        piazza: "www.wtf.co.il",
        download: "http://moodle.idc.ac.il/2017/pluginfile.php/113477/mod_assign/introattachment/0/%D7%AA%D7%A8%D7%92%D7%99%D7%9C%205.pdf?forcedownload=1"

    }, {
        title: 'Calculus',
        endDate: '05/25/2017 04:00 PM',
        moodle: "www.mi.com",
        piazza: "www.mu.co.il",
        download: "http://moodle.idc.ac.il/2017/pluginfile.php/113477/mod_assign/introattachment/0/%D7%AA%D7%A8%D7%92%D7%99%D7%9C%205.pdf?forcedownload=1"
    }]
}

let getAssingments = (cb) => {
    pg.connect(dbConnection, (err, client) => {
        if (err) throw err;
        let rows = [];
        client.query("SELECT * from assignments").on('row', (row) => {
            rows.push(row);
        })
            .on('end', () => {
                if (typeof cb === typeof Function)
                    cb(rows);
            })
    })
}

let saveAssignment = (assignment, cb) => {
    pg.connect(dbConnection, (err, client) => {
        if (err) throw err;
        let sql = `INSERT INTO assignments (title, end_date, end_time, moodle_url, piazza_url, homework_url) 
        VALUES ($1, $2, $3, $4, $5, $6)`;

        let values = [
            assignment.title,
            assignment.endDate,
            assignment.endTime,
            assignment.moodleUrl,
            assignment.piazzaUrl,
            assignment.homeworkUrl
        ]

        client.query(sql, values, (err, values) => {
            if (err) throw err;
            if (typeof cb === typeof Function)
                cb();
        });
    })
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment
};

module.exports = service;