var app = require('./app');
var debug = require('debug')('server');
var http = require('http');

var port = 3300;
app.set('port', port);
console.log("Listening on port " + port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//Event listener for erros
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCESS':
      console.error(bind + ' requires elevated priveleges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind+ ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
