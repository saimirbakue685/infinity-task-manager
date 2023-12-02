/*
 * Filename: advanced_code_example.js
 * Description: This code demonstrates a complex implementation of a chat application using JavaScript.
 */

// Importing necessary modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Initialize Express server
const app = express();
const server = http.Server(app);
const io = socketIO(server);

// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Store connected clients
let clients = [];

// Initialize chat room
let chatRoom = {
  name: 'Main Chat Room',
  messages: []
};

// Called when a new client connects
io.on('connection', (socket) => {
  // Add the client to the list
  clients.push(socket);

  // Send chat history to the client
  socket.emit('chat history', chatRoom.messages);

  // Broadcast a user joined message to other clients
  socket.broadcast.emit('user joined', socket.id);

  // Listen for new messages from the client
  socket.on('chat message', (msg) => {
    // Add the new message to chat history
    let newMessage = {
      timestamp: new Date(),
      sender: socket.id,
      content: msg
    };
    chatRoom.messages.push(newMessage);

    // Broadcast the new message to all clients
    io.emit('new message', newMessage);
  });

  // Listen for client disconnection
  socket.on('disconnect', () => {
    // Remove the client from the list
    clients = clients.filter(client => client !== socket);

    // Broadcast a user left message to other clients
    io.emit('user left', socket.id);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
