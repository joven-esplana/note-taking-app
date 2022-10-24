const fs = require('fs')

const add = function(oldNotes, note) {

    const notes = JSON.parse(oldNotes)

    notes.push(note)
    const objectNote = JSON.stringify(notes)

    fs.writeFileSync('note.txt', objectNote)
}

module.exports = add;