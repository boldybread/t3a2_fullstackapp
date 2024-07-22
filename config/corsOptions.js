const allowedOrigins = require('./allowedOrigins')

const express = require('express');
const corsOptions = {
  origin: '*',
};
const app = express();
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.listen(config.PORT);

module.exports = corsOptions 