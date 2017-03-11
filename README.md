# is-directory-promise
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
