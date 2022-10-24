const fs = require('fs');

const update = function(oldNotes, notes) {
    const tasks = JSON.parse(oldNotes)

    const newNotes = tasks.map((task) => {
        if(task.id === notes.id){
            task.title = notes.title;
            task.body = notes.body
        }
        return task
    })
    fs.writeFileSync('note.txt', JSON.stringify(newNotes))
}

module.exports = update;