const fs = require('fs');

const deleteNote = function(notes, id) {
    const tasks = JSON.parse(notes)
    const remaining = tasks.filter((task) => task.id !== id)

    fs.writeFileSync('note.txt', JSON.stringify(remaining))

} 

module.exports = deleteNote;