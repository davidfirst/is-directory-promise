# is-directory-promise

[![Build Status](https://travis-ci.org/davidfirst/is-directory-promise.svg?branch=master)](https://travis-ci.org/davidfirst/is-directory-promise)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![David](https://img.shields.io/david/strongloop/express.svg)]()

Checks if a path is a directory and returns promise

# Quick start
```javascript
const isDirectoryP = require('is-directory-promise');

isDirectoryP('\.').then(result => console.log(result)); //true
isDirectoryP('non-exist-dir').then(result => console.log(result)); //false
isDirectoryP(14).then().catch(err => console.error(err)); //the path argument must be a string
```

# Test
```javascript
npm test
```
