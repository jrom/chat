var express = require('express')
  , app = express.createServer()
  , io = require('socket.io').listen(app);


app.use(express['static'](__dirname + '/public'));

io.sockets.on('connection', function (socket) {
  socket.send('hello world');
  socket.on('message', function (data) {
    console.log(data);
  });
});

app.listen(8000);
