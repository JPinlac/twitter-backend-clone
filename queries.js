const db = require('./db');

function getUsers(req, res, next) {
    db.query('SELECT * FROM users', function (err, result) {
        // console.log(result);
        res.send(result.rows);
    });
}

function getUser(req, res, next) {
    var userId = parseInt(req.params.id);
    db.query('SELECT * FROM users WHERE id = $1', [userId], function (err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        res.status(200).send('number:', result);
    });
}

// router.get('/users/:id', db.getUser);
// router.post('/users', db.createUser);
// router.put('/users', db.updateUser);
// router.delete('/users/:id', db.deleteUser);


// router.get('/statuses', db.getStatuses);
// router.get('/statuses/:id', db.getStatus);
// router.post('/statuses', db.createStatus);
// router.put('/statuses', db.updateStatus);
// router.delete('/statuses/:id', db.deleteStatus);
//
// router.get('/likes/:id', db.getUserLikes);
// router.post('/likes/:id', db.createUserLike);
// router.delete('/likes/:id', db.deleteLike);

module.exports = {
    getUsers: getUsers,
    getUser: getUser
}