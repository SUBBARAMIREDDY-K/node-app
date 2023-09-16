var fs = require('fs')
const { isDate } = require('util/types')

var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log('Program Ended')