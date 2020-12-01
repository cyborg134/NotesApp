const yargs = require('yargs')
const notes = require('./notes')
yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'captured points',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'delete',
    descrobe: 'delete a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command: 'listNotes',
    describe: 'list all notes',
    handler(argv){
        notes.listNotes()
    }
})

yargs.command({
    command: 'getNote',
    describe: 'list the selected note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.getNote(argv.title)
    }
})


yargs.parse()
// //Example 1 - filesystem
// //const fs = require('fs')
// //fs.writeFileSync('notes.txt','first line')
// //fs.appendFileSync('notes.txt','second line')
// //const validator = require('validator')
// const getNotes = require('./notes')
// const chalk = require('chalk')
// const yargs = require('yargs')
// const { describe, string } = require('yargs')

// yargs.command({
//     command: 'add',
//     describe: 'command to add note',
//     builder:{
//         title:{
//             describe:'Note title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log('function to add note called '+ argv.title)
//     }

// }
// )

// yargs.parse()
//console.log(chalk.blue.inverse.bold('Hello this is a colored text'))
//const msg = getNotes()
//console.log(yargs.argv)
//console.log(validator.isEmail('pp@gmailcom'))