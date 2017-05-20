let getAssingments = () => {
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

let service = {
    getAssingments: getAssingments
};

module.exports = service;