# <span style="color:#ff8333">Logstack</span> ![NPM Version](https://badge.fury.io/js/logstack.svg) ![Total Download](https://img.shields.io/npm/dt/logstack.svg) ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Logstack is simple logger alternative to console.log() which is written in specified file instead of terminal window.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).<br />
Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install --save logstack
```

## Example & Usage
### To Log the message
```js
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
---

### To disable logstack
```js
// Please make sure the directory is available and use it only for logstack
const directory = path.join(__dirname, './directory');
const logFileCount = 3;
let log = function (logMessage) {
    // Passing false argument will not log the message
    logstack.createLog(directory, logFileCount, logMessage, false);
}
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
