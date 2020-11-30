const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){

}

const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length===0)
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

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = function(){
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

const deleteNote = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note){
        return note.title!==title
    })
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
    getNotes: getNotes,
    deleteNote: deleteNote

}
// console.log('notes.js')

// const var1 = 'inside notes'

// const getNotes = function(){
//     return 'Your notes are...'
// }

// module.exports = getNotes