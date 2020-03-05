const http = require('http');
const app = require('./app');
let port = process.env.PORT;
var server = http.createServer(app);
server.listen(port, function() {
  console.log(`${port} is opened`);
});