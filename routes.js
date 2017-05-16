var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Welcome to the Twitter clone api');
});

var db = require('./queries');

router.get('/users', db.getUsers);
router.get('/users/:id', db.getUser);
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

module.exports = router;
