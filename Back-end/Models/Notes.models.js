const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    heading: String,
    note: String,
    tag: String,
    rel_num: String,
    
})
const NotesModel = mongoose.model("post",notesSchema);


module.exports={
    NotesModel
}