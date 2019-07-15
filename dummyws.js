const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if(message =='login') {
    wss.clients.forEach(function each(client) {
     if (client.readyState === WebSocket.OPEN) {
       client.send('token');
     }
   });
 }
    console.log('received: %s', message);
  });

  ws.send('something');
});