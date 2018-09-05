# Logstack ![NPM Version](https://badge.fury.io/js/logstack.svg) ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Logstack is simple logger alternative to console.log() which is written in specified file instead of terminal window.

## Installation

This is a Node.js module available through the npm registry.<br />
Installation is done using the npm install command:
```bash
$ npm install --save logstack
```

## Example & Usage
```javascript
const logstack = require('logstack');
const path = require('path');

// Please make sure the directory is available and use it only for logstack
const directory = path.join(__dirname, './directory');
const logFileCount = 3;
let log = function (logMessage) {
    logstack.createLog(directory, logFileCount, logMessage); // To create log
}
// Just call the function with specified log message
log("Hello from logstack");
```

## Features
* Prints log messages with time in specific date file
* Provides option to create daily log file
* Useful in applications where you may want to log error, info while in development and production for different parts of the code

## Author
Rohan Shukla [Mail](mailto:errohanshukla@gmail.com) [GitHub](https://github.com/shuklarohan)

## License
© Licensed under the [MIT License](LICENSE).
