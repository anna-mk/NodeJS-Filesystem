const fs = require("fs");
const path = require("path");
const csv = require('csvtojson');

const inputFilePath = path.resolve(__dirname, "./csv/input.csv");
const outputFilePath = path.resolve(__dirname, "./output.txt");

(() => {
    csv().fromFile(inputFilePath).subscribe(jsonRow => {
        fs.appendFile(outputFilePath, JSON.stringify(jsonRow) + "\n", (err) => {
            if (err) {
                return console.log(`An error occurred: ${err}`);
            }
        })
    })
})();
