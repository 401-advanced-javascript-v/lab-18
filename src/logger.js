'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3001');

/**
 * logger listen to the event it cares
 */
socket.on('message', (payload) => {
    // let[event, data] = payload.split(',')
    console.log(payload);
})