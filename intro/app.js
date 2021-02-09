// Call and Export a variable and a function from other file
const utils = require('./utils.js')
console.log('Utiles module exports \n', utils)
console.log(utils.name)
console.log('Sum function:', utils.add(1,2))

// Creating a new file calling a function in another file
const notes = require('./notes.js')
console.log('Notes function: ',notes.getNotes())
console.log('File created notes.txt', notes.createNotes())

// Adding colors 
const chalk = require('chalk')
const successTheme = chalk.green
const warningTheme = chalk.keyword('orange')
const errorTheme = chalk.bgRed

// Validate an email
const validator = require('validator')
const email = 'email@email.com'
console.log('\nIs ' + email + ' a valid email? ' + successTheme(validator.isEmail(email)))

// Validate an URL
const url = 'www.website.com'
console.log('Is ' + url + ' a valid url? ' + warningTheme(validator.isURL(url))) 




