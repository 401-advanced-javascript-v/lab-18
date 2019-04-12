
'use strict';

const Q = require('@nmq/q/client');

const files = new Q('file');

files.subscribe('save', (payload) => {
  console.log('file saved', payload);
});

files.subscribe('error', (payload) => {
  console.log('error', payload);
});


console.log(files.subscriptions());
