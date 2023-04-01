const socket = io();

// Menampilkan pesan
const showMessage = (message) => {
  const messages = document.querySelector('.messages');
const li = document.createElement('li');
li.innerHTML = message;
messages.appendChild(li);
messages.scrollTop = messages.scrollHeight;
};

// Mengirim pesan
const sendMessage = () => {
const inputMessage = document.querySelector('.input-message');
const message = inputMessage.value.trim();

if (message !== '') {
socket.emit('sendMessage', message);
inputMessage.value = '';
}
};

if (message !== '') {
socket.emit('sendMessage', message);
inputMessage.value = '';
}
};

// Event listener untuk button send
document.querySelector('.btn-send').addEventListener('click', (e) => {
e.preventDefault();
sendMessage();
});

// Event listener untuk form submit
document.querySelector('.input-form').addEventListener('submit', (e) => {
e.preventDefault();
sendMessage();
});

// Event listener untuk menerima pesan
socket.on('receiveMessage', (message) => {
showMessage(message);
});

