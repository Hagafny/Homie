const queryService = require('./queryService');
const db = require('./../pgConnection');

const getAssingments = (classIds, cb) => {
  const sql = queryService.getAssingments(classIds);
  db.any(sql).then(cb);
};

const service = {
  getAssingments
};

module.exports = service;
