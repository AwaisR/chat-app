const socket = io.connect("http://localhost:8000");
console.log(socket.connected);
const form = document.getElementById("send-countainer");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
console.log("socket", socket);
const name = prompt("Enter your name to joined");
socket.emit("new-user-joined", name);
