// Cloud sql start proxy
// sudo mkdir /cloudsql; sudo chmod 777 /cloudsql
// ./cloud_sql_proxy -dir=/cloudsql -instances=airnetp:us-central1:airnet-sql \ -credential_file=./airnetP-fe0b5224641b.json &
// or ./cloud_sql_proxy -dir=/cloudsql &
//
// to connect using psql:
// psql -U postgres -h /cloudsql/airnetp:us-central1:airnet-sql
// or psql "sslmode=disable host=/cloudsql/airnetp:us-central1:airnet-sql user=postgres"
//
// credential file name = airnetP-fe0b5224641b.json

const pg = require('pg');

var config = {
  user: 'jpinlac',
  database: 'twitterclone',
  password: 'secret',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeout: 30000
};

const pool = new pg.Pool(config);

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
