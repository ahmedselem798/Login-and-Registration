const express = require("express");
const cros = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("./model/user");
const Users = mongoose.model('user')

const app = express();
app.use(express.json());
app.use(
  cros({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/RegisterTest")
  .then(() => {
    console.log("connected..");
  })
  .catch(() => {
    console.log("faild");
  });

const varifyUser = (req,res,next)=>{
  const token = req.cookie.token
  if(!token){
    return res.json('Token missing')
  }else{
    jwt.verify(token,"jwt-secret-key",(err,decode)=>{
      if(err){
        return res.json("error with token")
      }else{
        if(decode.role==="admin"){
          next()
        }else{
          return res.json("not admin")
        }
      }
    })
  }
}
app.get('/dashboard', varifyUser , (req,res)=>{
  res.json('Success')
})

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({status:"Success",role:user.role});
        } else {
          return res.json("Password not correct");
        }
      });
    } else {
      return res.json("no User Found");
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      Users.create({ name, email, password: hash })
        .then((user) => res.json("Success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});
app.listen(5000, () => {
  console.log("Running.....");
});

