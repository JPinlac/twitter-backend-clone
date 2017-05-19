const db = require('./db');

function getUsers(req, res, next) {
    db.query('SELECT * FROM users', function (err, result) {
        res.send(result.rows);
    });
}

function getUserByLastNameOrId(req, res, next) {
	var queryString = 'SELECT * FROM users WHERE lower(lastname) = $1';
    var searchTerm = req.params.id.match(/[a-z]/gi);
    if (searchTerm === null) {
        searchTerm = parseInt(req.params.id);
        queryString = 'SELECT * FROM users WHERE id = $1';
    } else {
        searchTerm = searchTerm.join('');
    }

    db.query(queryString, [searchTerm], function (err, result) {
        if(err) {
          return console.error('error running query', err);
        }

        res.status(200).json(result.rows);
    });
}

function createUser(req, res, next) {
    req.params
	db.query("INSER INTO users (firstName, lastName) values ($1, $2)", [earchTerm], function (err, result) {
		if(err) {
			return console.error('error running query', err);
		}
		res.status(200).json(result.rows);
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
	getUserByLastNameOrId: getUserByLastNameOrId,
    createUser: createUser
}