const sharedsession = require("express-socket.io-session");
const socketIO = require("socket.io");
let io

function init(http, session){
  io = socketIO(http)
  io.use(
    sharedsession(session)
  );
  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.handshake.session.test = {socketId: socket.id};
    socket.handshake.session.save();
  });
}

function informUserPreparationStarted(socketId){
  io.to(socketId).emit("preparationStart")
}

function informUserPreparationEnded(socketId){
  io.to(socketId).emit("preparationEnd")
}

module.exports = {
  init,
  informUserPreparationStarted,
  informUserPreparationEnded
}