const express = require('express');
const cors= require('cors');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const port = 3000;

const serverhttp = http.createServer(app);
//const io = socketio(serverhttp);
serverhttp.use(express.json());
serverhttp.use(cors());
serverhttp.use(http());

const io = socketio(serverhttp , {
    cors: {
        origin: '*',
    }
});
