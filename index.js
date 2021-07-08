#!/usr/bin/env node
const program = require('commander');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const log = console.log;

program.version('1.0.0').description('Simple password Generator');

// program.command('generate').action(()=>{
//     console.log('Generated');
// }).parse();

program
.option('-l, --length <number>', 'length of password', '8')
.option('-s, --save', 'save password to password.txt')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
.parse()

const {length, save, numbers, symbols} = program.opts();


// console.log(numbers, symbols);

const generatedPassword = createPassword(length, numbers, symbols);

//Save to txt
if(save){
    savePassword(generatedPassword);
}


// Copy to clipboard
clipboardy.writeSync(generatedPassword);

log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));

log(chalk.yellow('Password copied to clipboard.'))