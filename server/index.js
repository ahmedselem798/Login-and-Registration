const { MongoClient } = require("mongodb");
const express = require("express");
const cros = require("cors");
const mongoose = require("mongoose");
const DataModel = require("./regestSch");
const app = express();
app.use(express.json());
app.use(cros());


const url = "mongodb+srv://ahmed:ahmed1234@cluster0.yf5tknm.mongodb.net/RegisterTest";
const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.log("DataBase Connected");

  } catch (error) {
    console.log(error);
  }
}
connect();


app.post("/register", (req, res) => {
  DataModel.create(req.body)
    .then((Data) => res.json(Data))
    .catch((err) => res.json(err));
});
app.listen(7000, () => {
  console.log("Running....");
});