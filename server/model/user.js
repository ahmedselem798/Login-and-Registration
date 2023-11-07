const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const Users = mongoose.model("users",UserSchema)

module.exports = Users