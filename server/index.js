
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

app.post('/login',(req,res)=>{
  const {email,password} = req.body
  Users.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }else{
        res.json("Wrong Password")
      }
    }else{
      res.json("no User Found")
    }
  })
})

app.post("/register", (req, res) => {
  Users.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.listen(5000, () => {
  console.log("Running....");
});
