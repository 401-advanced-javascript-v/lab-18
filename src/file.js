'use strict';

const fs = require('fs');
const util = require('util');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * export all file methods
 */
const file = module.exports = exports = {};

file.loadFile = (file) => readFile(file);
file.saveFile = (file, buffer) => writeFile(file, buffer);
file.convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

file.alterFile = incomingFile => {
  file.loadFile(incomingFile)
    .then( contents => file.convertBuffer(contents))
    .then( buffer => file.saveFile(incomingFile, buffer))
    .then( () => socket.emit('publish', {event:'save', data: incomingFile}))
    .then( () => true )
    .catch( error => {socket.emit('publish', {evnet: 'err', data :error})
    })
};
