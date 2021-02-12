// Importación de el paquete express
const express = require('express');
const path = require('path');

// Importación del paquete para correr el servidor en un puerto aleatorio
require('dotenv').config();

// Variable de aplicación
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
// Importación del archivo socket.js
require('./sockets/sockets');




// Path público
const publicPath = path.resolve(__dirname, 'public');


app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});