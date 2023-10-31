const mongoose = require('mongoose')

const DataShcema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const DataModel = mongoose.model("Data",DataShcema)

module.exports = DataModel