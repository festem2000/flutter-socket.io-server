const { io } = require('../index');

// Socket Menssages
io.on('connection', client => {
    console.log('Connect client');

    client.on('disconnect', () => {
        console.log('Disconnect client');
    });

    // ON es para escuchar
    client.on('mensaje', (payload) => {
        console.log('Mensajee!!!!!!', payload);

        io.emit('mensaje', { admin: 'nuevo mensaje' });
    });

});