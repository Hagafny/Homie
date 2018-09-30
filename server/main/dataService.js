const queryService = require('./queryService');
const db = require('./../pgConnection');

const getAssingments = (classIds, cb) => {
  const sql = queryService.getAssingments(classIds);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const service = {
  getAssingments
};

module.exports = service;
