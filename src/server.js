// const express = require("express");
import http from "http";
import WebSocket from "ws";
import express from "express";
const app = express();
const sockets = [];
app.set('view engine', "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req, res) => {
    res.render("home");
});
app.get("/*",(req,res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://127.0.0.1:3000");
// app.listen(3000,handleListen);

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on("connection",(socket) => {
    console.log("Connected to Client🤞");
    socket.send("Hello!! -from server");
    socket.on("close", () => console.log("Disconnected From Client🤷‍♂️"));
    socket.on("message", (message) => {
        console.log(message.toString("utf-8"));
        sockets.forEach((sc) => {
            sc.send(message.toString("utf-8"));
        })
    });
    sockets.push(socket);
});

server.listen(3000, handleListen);