const http = require('http');
const express = require('express');
const itemsRouter = require('./server/items');
const app = express();
app.use(express.json());
app.use('/items',itemsRouter);
app.use('/', function(req, res) {
    res.send('todo api works');
});
const server = http.createServer(app);
const port = 4000;
server.listen(port);
console.log('Server listening on port ' + port);