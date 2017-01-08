var ws = require('websocket.io');
var server = ws.listen(process.env.PORT || 8124);

server.on('connection', function(socket) {
    console.log('Connection started');
    console.log(socket.constructor);

    socket.on('message', function(data) {
        console.log('Message received:' + data);

        console.log('Client count: ' + server.clients.length);
        server.clients.forEach(function(client) {
            try {
                client && client.send(data);
            } catch (err) {
                console.log(err);
            }
        });
    });
});
