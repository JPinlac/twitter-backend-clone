const pg = require('pg');
var config = {
  user: 'jpinlac',
  database: 'twitterclone',
  password: 'secret',
  host: 'localhost',
  port: 8033,
  max: 10,
  idleTimeout: 30000
};

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

module.exports.query = function (text, values, callback) {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};

module.exports.connect = function (callback) {
  return pool.connect(callback);
};
