'use strict';

const fs = require('fs');
const isString = require('is-string');

export default function (path) {
  return new Promise((resolve, reject) => {
      if (!isString(path)) return reject('the path argument must be a string');
      try {
        const status = fs.lstatSync(path);
        resolve(status.isDirectory());
      }
      catch (err) {
        resolve(false);
      }
  });
}
