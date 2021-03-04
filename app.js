const express = require('express')
const app = express()
const path = require('path')
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); // tells express ot look at everything in the public folder

// renders the index.html (homepage)
app.get('/', (req, res) => {
  res.sendFile('index.html');
  //res.send('Hello World!')
})
app.get('/chat', function(req, res) {
    res.render('index.ejs');
});

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});