'use strict';

// const io = require('socket.io')(3001);
const Q = require('@nmq/q/server');
Q.start();

const files = new Q('file');
files.monitorEvent('save');
files.monitorEvent('error');
