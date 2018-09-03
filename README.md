# Logstack ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Logstack is simple logger alternative to console.log which is written in specified file instead of terminal window.

## Installation

`$ npm install --save logstack`

## Example & Usage
```
const logstack = require('logstack');

// Please make sure the directory is available and use it only for logstack
const directory = './directory';
let log = function (logMessage) {
    logstack.createLog(directory, 3, logMessage); // To create log
}
// Just call the function with specified log message
log("Hello from logstack");
```

## Author
Rohan Shukla [LinkedIn](www.linkedin.com/in/shuklarohan) [GitHub](https://github.com/shuklarohan)

## License
© Licensed under the [MIT License](LICENSE).
