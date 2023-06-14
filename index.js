'use strict'

require('dotenv').config();

const PORT = process.env.PORT

const {start} = require('./src/server')

start(PORT);