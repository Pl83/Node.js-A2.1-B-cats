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
  console.log(socket)
  socket.on("message", (data) => {
    console.log('socketdata log');
    console.log(data);
    io.emit("Sendfront", data)
  })
})

app.post('/login/', (req, res) => {
    console.log(req.body);
    console.log(req.body.user)
    console.log(req.body.password)
    res.json({user: req.body.user , pokes: req.body.pokfav});
});
app.post('/register/', (req, res) => {
    console.log(req.body.pokfav);
    console.log(req.body.user)
    console.log(req.body.password)

});

app.get('/logout/', (req, res) => {
    console.log("vous etes deconnecté");
    res.json({msg: "suppresion de compte"});
});

app.delete('/delete/', (req, res) => {
    console.log("suppresion de compte");

});
httpServer.listen(port, () => {
  console.log(`On écoute le port n°${port}`)
});


console.log(app)  

