const app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', socket => {

  socket.on('msg', obj => {
    io.emit('msg', obj);
  });

});

http.listen(3000);