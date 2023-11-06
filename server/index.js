// const { MongoClient } = require("mongodb");
const express = require("express");
const cros = require("cors");
const mongoose = require("mongoose");
const Users = require('./model/user')
// const DataModel = require("./regestSch");
const app = express();
app.use(express.json());
app.use(cros());


// const url = "mongodb+srv://ahmed:ahmed1234@cluster0.yf5tknm.mongodb.net/RegisterTest";
// const client = new MongoClient(url);

// async function connect() {
//   try {
//     await client.connect();
//     console.log("DataBase Connected");

//   } catch (error) {
//     console.log(error);
//   }
// }
// connect();

mongoose.connect("mongodb+srv://ahmed:ahmed1234@cluster0.yf5tknm.mongodb.net/RegisterTest").then(()=>{
  console.log("connected..")
}).catch(()=>{
  console.log("faild")
})

app.post("/register", (req, res) => {
  Users.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.listen(7000, () => {
  console.log("Running....");
});
