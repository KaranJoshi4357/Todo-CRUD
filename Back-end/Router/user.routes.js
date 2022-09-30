const { Router } = require("express");
const userController = Router();
let jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.models");
const bcrypt = require("bcrypt");
userController.post("/signup", async (req, res) => {
  const { email, password, age } = req.body;
  bcrypt
    .hash(password, 3)
    .then(async function (hash) {
      const user = new UserModel({ email, password: hash, age });
      await user.save();
      res.json({msg:"Sign up Successfully"});
    })
    .catch(() => {
      console.log("Error!!");
    });
});

userController.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let userFind = await UserModel.findOne({  email });
  let uid = userFind._id;
  let hash = userFind.password;
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      let token = jwt.sign({ id: uid }, "secret");
      res.json({ msg: "Login Successfully", token: token });
    } else {
      res.json("Login Failed");
    }
  });
});

module.exports = {
  userController,
};
