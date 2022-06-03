const socket = new WebSocket(`ws://${window.location.host}`);
socket.addEventListener("open",() => {
    console.log("Connected to Server👍");
});

socket.addEventListener("message",(message) => {
    console.log(message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconnected From Server😢");
});

setTimeout(()=>{
    socket.send("Hello from Browser!!");
}, 10000);