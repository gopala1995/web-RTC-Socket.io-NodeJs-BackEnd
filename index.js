const express = require("express");
const bodyParser = require("body-parser");
const { Server, Socket } = require("socket.io");

const io = new Server();

const app = express();
app.use(bodyParser.json());

io.on("connection", (socket) => {});

app.listen(7000, () => console.log("Server is running on port 7000"));
io.listen(7001);
