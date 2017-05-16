const pool = require('./db');

pool.query('SELECT * FROM users', function (err, result) {
  console.log(result);
});
