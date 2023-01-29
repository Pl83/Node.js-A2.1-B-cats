const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const {Server} = require("socket.io");

const httpServer = http.createServer(app);

const port = 3000;

const io = new Server(httpServer, {
    cors : {
        origin : '*'
    }
});

// middelware
app.use(express.json());
app.use(cors());

// routes

io.on("connection", (socket) => {
  console.log('socketdataid log');
  console.log(socket.id)
  socket.on("message", (data) => {
    console.log('socketdata log');
    console.log(data);
    io.emit("Sendfront", data)
  })
})

httpServer.listen(port, () => {
  console.log(`On écoute le port n°${port}`)
});

console.log(app)  

