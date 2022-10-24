const fs = require('fs')
const read = require('./read')
const add = require('./add')
const present = require('./present')
const deleteNote = require('./delete')
const update = require('./update')


const data = process.argv

if(data[2] === 'add'){
    let note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }

    const notes = read();

    add(notes, note)
}

if(data[2] === 'read'){
    present(read());
}

if(data[2] === 'delete') {
    const notes = read();
    const id = data[3];
    deleteNote(notes, id)
}

if(data[2] === 'update'){
    let note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }

    const notes = read()

    update(notes, note)
}