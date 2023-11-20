const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "1234";

const app = express();
app.use(express.json());
app.use(cors());

require("./model/user");
const Users = mongoose.model("user");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Database Connected..");
  })
  .catch((error) => {
    console.log("Faild to Connect Database...");
    console.log(error);
  });

app.listen(8080, () => {
  console.log("Server Running on Port 8080......");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const oldUser = await Users.findOne({ email });
  const encryptedPassword = await bcrypt.hash(password, 10);

  if (oldUser) {
    return res.json({ error: "User already Exist" });
  }
  try {
    await Users.create({ name, email, password: encryptedPassword });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error" });
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });
  if (!user) {
    return res.json({ error: "user not exist" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);
    if (res.status(201)) {
      console.log(token)
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  return res.json({ status: "error", error: "Password incorrect" });
});

app.post("/home", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userEmail = user.email;
    Users.findOne({ email: userEmail })
      .then((data) => {
        res.json({ status: "ok", data: data });
      })
      .catch((error) => {
        res.json({ status: "error", data: error });
      });
  } catch (error) {}
});
