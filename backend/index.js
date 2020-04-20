const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);

io.sockets.on('connection',(socket)=>{
    
    console.log("sock is on");

    socket.on("play", playMsg => {
        io.emit("play",playMsg);
    });

});

server.listen(3001);
