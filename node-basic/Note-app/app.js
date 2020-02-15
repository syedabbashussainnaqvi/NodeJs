const yargs = require('yargs')
const utility = require('./utility')
yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Add New Note',
    builder:{
        title:{
            describe:'Title Name',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Enter Msg',
            demandOption:true,
            type: 'string'
        }
    },
    handler :  (argv)=> {
        utility.addNote(argv.title,argv.body)
    }
}).argv

yargs.command({
    command: 'update',
    describe: 'Update Note',
    builder:{
        title:{
            describe:'Note Name',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Enter Msg',
            demandOption:true,
            type: 'string'
        }
    },
    handler :  (argv)=> {
        utility.updateNote(argv.title,argv.body)
    }
}).argv

yargs.command({
    command: 'remove',
    describe: 'Remove Note',
    builder:{
        title:{
            describe:'Title Name',
            demandOption:true,
            type: 'string'
        }
    },
    handler : (argv)=> {
        utility.removeNote(argv.title)
    }
}).argv

yargs.command({
    command: 'show',
    describe: 'List Note',
    handler : ()=> {
        utility.showNote()
    }
}).argv