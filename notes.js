const fs = require('fs')
const chalk = require('chalk')
const { get } = require('http')

const getNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.title===title
    })
    if(note)
    {
        console.log(chalk.blue.inverse(note.title) + "\n" + note.body)
    }
    else
    {
        console.log(chalk.red.inverse('No note found!'))
    }
}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes \n'))
    notes.forEach((note) => {
        console.log(note.title + "\n")
    });
}

const addNote = (title,body)=>{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title===title)//stops the search during the first hit whereas filter iterates completely

    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        console.log(notes)
        saveNotes(notes)
    }
    else{
        console.log('Note title taken')
    }
    
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        const data = JSON.parse(dataJson)
        return data
    }
    catch(e)
    {
        return []
    }
}

const deleteNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title!==title)
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No Note found! '))
    }
    
    //console.log('Note: '+ chalk.red(title) + ' removed')
}

module.exports = {
    addNote: addNote,
    listNotes: listNotes,
    deleteNote: deleteNote,
    getNote: getNote

}
// console.log('notes.js')

// const var1 = 'inside notes'

// const getNotes = function(){
//     return 'Your notes are...'
// }

// module.exports = getNotes