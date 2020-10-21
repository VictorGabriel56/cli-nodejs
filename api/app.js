const express = require('express');
const app = express();
const rota = require('./routes/test');
const morgan = require('morgan');


app.use(morgan('dev'));
app.use('/', rota);

module.exports = app;