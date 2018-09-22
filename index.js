/**
 * @author : Rohan Shukla
 */

const fs = require('fs');
const utils = require('./utils');

let date = new Date();

var logstack = {
    createLog: function (pathDirectory, loggerCount, log, enable = true) {

        if(typeof pathDirectory === 'undefined'){
            throw new TypeError('Path Directory argument is missing / not defined');
        }
        if (isNaN(loggerCount)) {
            throw new TypeError('Second argument is not a number');
        }
        if (typeof log === 'undefined') {
            throw new TypeError('Log Message argument is missing / not defined');
        }

        if (enable) {
            // Appending log message with Time of logging
            let logMessage = utils.formatTime(date) + " --> " + log + "\n\n";

            // Filename is according to current date
            let fileName = utils.formatDate(date);

            /**
             * Reading the Number of files to maintain the file counts in directory
             */
            fs.readdir(pathDirectory, (err, files) => {
                // File path with file name
                let filePath = pathDirectory + '/' + fileName;
                if (err) {
                    throw err;
                } else {
                    /**
                     * If the count is greater than logger count then
                     * deleting old files and insert new current date files
                     * Else appending the log message to same date file
                     */
                    if (files.length > loggerCount) {
                        fs.unlink(pathDirectory + '/' + files[0], (err) => {
                            if (err) throw err;

                            fs.appendFile(filePath, logMessage, (err) => {
                                if (err) throw err;
                            });
                        });
                    } else {
                        fs.appendFile(filePath, logMessage, (err) => {
                            if (err) throw err;
                        });
                    }
                }
            });
        }
    }
}

module.exports = logstack;