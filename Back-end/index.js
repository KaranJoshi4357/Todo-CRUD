const express = require("express");
const app = express();
const { connection } = require("./Config/db");
require("dotenv").config();
const { userController } = require("./Router/user.routes");
const { notesRouteController } = require("./Router/notes.routes");
const authentication = require("./Middlewares/authentication");
const PORT = process.env.PORT;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/user", userController);
app.use(authentication);
app.use("/note", notesRouteController);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
  console.log("App runinng on", PORT);
});
