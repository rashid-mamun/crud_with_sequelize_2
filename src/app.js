const express = require('express');
const config = require('./config');
const routes = require('./routes')
const app = express();
app.use(express.json());


app.use('', routes);

module.exports = app;
