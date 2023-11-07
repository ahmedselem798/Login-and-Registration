
const express = require("express");
const cros = require("cors");
const mongoose = require("mongoose");
const Users = require('./model/user')

const app = express();
app.use(express.json());
app.use(cros());




mongoose.connect("mongodb://127.0.0.1:27017/RegisterTest").then(()=>{
  console.log("connected..")
}).catch(()=>{
  console.log("faild")
})

app.post("/register", (req, res) => {
  Users.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.listen(5000, () => {
  console.log("Running....");
});
