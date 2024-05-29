// ************************************************************************************************
//  This file will be used as socket manager to pass messages to clients
// *********************************************************************

var socketIO = require("socket.io").Server;

// Setup socket.io
let io;

function registerListeners(server) {
  console.log("registerListeners");
  // Setup socket.io
  io = new socketIO(server);

  io.sockets.on('connection', function (socket) {
    console.log('SocketIO Connection', socket.conn.id)
  });
}

module.exports = {
  registerListeners
}