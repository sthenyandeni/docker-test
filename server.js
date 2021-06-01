const express = require('express')
const http = require('http')
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get('/test1', (req, res) => {
    res.send(`This is a real get request`);
})

app.post('/test2', (req, res) => {
    res.send(`This is a post request`);
})

server.listen(5003);