console.log("Utility.js")
const fs = require("fs")
const chalk = require("chalk")

const addNote = (noteName,msg)=>{
    const notes  =loadNote()
    const duplicate = Object.keys(notes.notes).filter(title=>{
        return title === noteName
    })
    if(duplicate.length >=1){
        console.log((chalk.red.inverse("Title Already taken")))
    }
    else{
        notes.notes[noteName] = {
            title: noteName,
            body: msg
        }
        fs.writeFileSync("notes.json",JSON.stringify(notes))
        console.log(chalk.green.inverse("Note Added Successfully"))
    }    
}
const removeNote = (noteName)=>{
    const notes  =loadNote()
    const duplicate = Object.keys(notes.notes).filter(title=>{
        return title === noteName
    })
    if(duplicate.length ==0){
        console.log(chalk.red.inverse("Note with the title",noteName,"doesn't exit"))
    }
    else{
        delete notes.notes[noteName]
        //converting JSON object to string bcz fs module only works with string
        fs.writeFileSync("notes.json",JSON.stringify(notes))
        console.log(chalk.green.inverse("Note with title name",noteName,"is deleted Successfully"))
    }    
}

const updateNote = (noteName,msg)=>{
    return console.log("update: ",noteName," Msg: ",msg)
}

const loadNote = ()=>{
    try{
        const loadNotes = fs.readFileSync("notes.json")
        const bufferData = loadNotes.toString();
        const jsonObj = JSON.parse(bufferData)
        return jsonObj
    }
    catch(e){
        return {notes:{}}
    }
   
}

const showNote = ()=>{
    try{
        const showNote = fs.readFileSync("notes.json")
        const bufferData = showNote.toString();
        const jsonObj = JSON.parse(bufferData)
        Object.keys(jsonObj.notes).forEach(note=>{
            console.log("Title: ",note," Body: ",jsonObj.notes[note].body)
        })
    }
    catch(e){
        console.log("Empty")
    }
   
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    updateNote: updateNote,
    showNote: showNote
}