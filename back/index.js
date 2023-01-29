
const express = require('express');
const cors= require('cors');
const http = require('http');
const socket = require('socket.io');

const app = express();
const port = 3000;

const serverhttp = http.createServer(app);
app.use(express.json());
app.use(cors());

const io = socket(serverhttp , {
    cors: {
        origin: '*',
    }
});
serverhttp.listen(port, () => {
    console.log(`On écoute sur le port ${port}`);
});