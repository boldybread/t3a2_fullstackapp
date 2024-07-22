const allowedOrigins = [
    'https://aperturescience.onrender.com/',
    'https://aperturescience-api.onrender.com/',
    'https://aperturescience-api.onrender.com/auth',
    Access-Control-Allow-Origin *
]

Access-Control-Allow-Origin;

const express = require('express');
const corsOptions = {
  origin: '*',
};
const app = express();
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.listen(config.PORT);

module.exports = allowedOrigins