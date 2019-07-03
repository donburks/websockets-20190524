const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.broadcast = function(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  ws.on('message', wss.broadcast);
});
