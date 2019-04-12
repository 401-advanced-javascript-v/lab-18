'use strict';

const{ alterFile, read} = require('../src/app.js');

// const log = jest.spyOn(global.console, 'log').mockImplementation(() =>{});

describe('`alterFile` function', () => {
    it('not throw an error', () => {
      const file = 'test.txt';
      expect(() => alterFile(file)).not.toThrow();
    });
  });

describe('readFile', () => {

    it('can read a good file', () => {
      const file = 'test.txt';
      const result = read(file);
      return expect(result).resolves.toEqual(Buffer.from('File Contents'));
    });
    it('throws an error when given a bad file', () => {
      const file = 'bad.txt';
      const result = read(file);
      return expect(result).rejects.toEqual('Invalid File');
    });
});

