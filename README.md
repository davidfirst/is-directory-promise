# is-directory-promise
Checks if a path is directory and returns promise

# Quick start

```javascript
const isDirectoryP = require('is-directory-promise');

isDirectoryP('\.').then((result) => console.log(result)); \\ true
isDirectoryP('non-exist-dir').then((result) => console.log(result)); \\false
```
