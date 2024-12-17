const express = require("express");
const bodyParser = require("body-parser");
const { Server, Socket } = require("socket.io");

const io = new Server({
  cors: true,
});

const app = express();
app.use(bodyParser.json());

const emailToSocketMap = new Map();

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;

    console.log("user", emailId, "joinedRoom", roomId);

    emailToSocketMap.set(emailId, socket);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-joined", emailId);
  });
});

app.listen(7000, () => console.log("Server is running on port 7000"));
io.listen(7001);
