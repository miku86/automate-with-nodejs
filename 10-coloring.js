const chalk = require('chalk');

const error = chalk.bgRed;
const success = chalk.bgGreen.black;

console.log(success('Hello'));
console.log(error('Hello'));
