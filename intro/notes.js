const getNotes = function() {
    return 'Your notes...'
}

const fs = require('fs')
const createNotes = function() {
    fs.writeFileSync('files/notes.txt', 'This file was created by node.js!')
    fs.appendFileSync('files/notes.txt', '\nThis was appended after the file creation')
}

module.exports = {
    getNotes,
    createNotes
}