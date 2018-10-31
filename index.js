require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const client_port = process.env.CLIENT_PORT || '9001'
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 500 
});

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(client_port, () => console.log(`Example app listening on port ${client_port}!`))

const messages = require('./messages');
app.use('/messages', messages);
