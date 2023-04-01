const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  // Event listener untuk menerima pesan baru dari client
  socket.on('sendMessage', (message, callback) => {
    io.emit('message', message); // Mengirim pesan ke semua client
    callback(); // Memanggil fungsi callback pada client
  });

  // Event listener untuk ketika client disconnect
  socket.on('disconnect', () => {
    console.log('WebSocket disconnected');
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
