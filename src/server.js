// const express = require("express");
import http from "http";
import WebSocket from "ws";
import express from "express";
const app = express();

app.set('view engine', "pug");
app.set("views", __dirname + "/views");

app.get("/",(req, res) => {
    res.render("home");
});
app.get("/*",(req,res) => res.redirect("/"));
app.use("/public", express.static(__dirname + "/public"));

const handleListen = () => console.log("Listening on http://127.0.0.1:3000");
// app.listen(3000,handleListen);

const server = http.createServer(app);

const wss = new WebSocket.Server({server});

server.listen(3000, handleListen);