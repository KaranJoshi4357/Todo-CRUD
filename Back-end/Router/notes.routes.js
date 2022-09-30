const { Router } = require("express");
const notesRouteController = Router();
const { NotesModel } = require("../Models/Notes.models");
const jwt = require("jsonwebtoken");
notesRouteController.get("/", async (req, res) => {
  let decode = req.body.id;
  // console.log(decode);
  let notes = await NotesModel.find({ rel_num: decode });
  res.json(notes);
});

notesRouteController.post("/create", async (req, res) => {
  let { heading, note, tag, rel_num } = req.body;
  const dc = req.body;
  rel_num = dc.id;
  // console.log(dc.id);
  const newNotes = new NotesModel({ heading, note, tag, rel_num });
  await newNotes.save();
  res.json("Notes added");
});

notesRouteController.delete("/delete/:noteid", async (req, res) => {
  const { noteid } = req.params;
  let dc = req.body.id;
  //   let dl = NotesModel.find({"rel_num":dc});
  const noteDeleted = await NotesModel.findOneAndDelete({
    _id: noteid,
    rel_num: dc,
  });
  if (noteDeleted) {
    res.json("Note Delete");
  } else {
    res.json("Something went wrong");
  }
});

notesRouteController.put("/edit/:noteid", async (req, res) => {
  const { noteid } = req.params;
  let dc = req.body.id;
  //   let dl = NotesModel.find({"rel_num":dc});
  const noteUpdated = await NotesModel.findOneAndUpdate(
    {
      _id: noteid,
      rel_num: dc,
    },
    req.body 
  );
  if (noteUpdated) {
    res.json("Note Updated");
  } else {
    res.json("Something went wrong");
  }
});

module.exports = {
  notesRouteController,
};
