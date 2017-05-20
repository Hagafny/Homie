let getAssingments = () => {
    return [{
        endDate: '06/08/2020 10:55 AM',
        moodle: "www.what.com",
        piazza: "www.wtf.co.il"

    }, {
        endDate: '06/08/2026 10:55 AM',
        moodle: "www.mi.com",
        piazza: "www.mu.co.il"
    }]
}

let service = {
    getAssingments: getAssingments
};

module.exports = service;