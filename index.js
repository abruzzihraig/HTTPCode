#!/usr/bin/env node
var code = require('./code');
var yargs = require('yargs');
var argv = yargs
    .usage('Usage: $0 [status code] [options]')
    .command('[num...]', 'find out the meaning of inputed code')
    .example('$0 404', 'find out the meaning of 404 code')
    .example('$0 404 500', 'find out a group of meaning')
    .option('a', {
        alias: 'all',
        describe: 'find out all of HTTP status code'
    })
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2015')
    .argv;

if (argv.a) return console.log(code.find_all());

if (argv._.length > 0) return console.log(code.find_status(argv._));

yargs.showHelp();
