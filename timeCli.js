#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let multiplier = 0

if(argv['_'][0] === 'add') {
    multiplier = 1
}
if(argv['_'][0] === 'sub') {
    multiplier = -1
} 

if(argv['_'][0] === 'current') {
    const currentDate = new Date()
    console.log('Текущая дата и время в формате ISO: ' + currentDate)
} 
if (argv.y || argv.year) {
    const number = argv.d * multiplier
    const currentYear = new Date().getFullYear()
    console.log('Текущий год: ', currentYear + number)
}
if (argv.m || argv.month) {
    const number = argv.d * multiplier
    const currentMonth = new Date().getMonth()
    console.log('Текущий месяц: ', currentMonth + number)
}
if (argv.d || argv.date) {
    const number = argv.d * multiplier
    const currentDate = new Date().getDate()
    console.log('Дата в календарном месяце: ', currentDate + number)
}
