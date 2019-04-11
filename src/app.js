'use strict';

const files = require('../src/file.js');

let file = process.argv.slice(2).shift();

if(file) {
  files.alterFile(file);
}
