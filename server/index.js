import http from 'http'
//import app from './server'
import app from './app'
//var app = require('app.js');
const server = http.createServer(app)

let currentApp = app

app.locals.isDev =true;

server.listen(3000)
