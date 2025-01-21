const express = require('express')

const {WebSocketServer} = require('ws');
const app = express();


const port = 8080;

const server = app.listen(port, ()=>{
    console.log("The server is Listening...")
});

const wss = new WebSocketServer({server});

wss.on("connection",(ws)=>{
    ws.on("message", (data)=>{
        console.log("Data send by Client : %s",data);
        ws.send("Thanks for the visit...");
    })

});