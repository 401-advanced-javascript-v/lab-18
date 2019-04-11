'use strict';
const io = require('socket.io')(3001);

io.on('connection', (socket) => {
    console.log('CONNECTED', socket.id);

/**
 * server broadcast what happened
 */
    socket.on('publish', (payload) => {
        io.emit('message', payload);
    })
})