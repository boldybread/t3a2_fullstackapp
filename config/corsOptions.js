const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        Access-Control-Allow-Origin *
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 