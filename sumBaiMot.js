var chalk = require('chalk');
var test = require('./api/demoBaiMot');


function tich() {
    return test * 2
}


console.log(chalk.redBright(tich()));