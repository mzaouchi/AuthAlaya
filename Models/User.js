const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : {type : String, unique : true, required : true},
    password : {type : String, required : true}
})

module.exports = mongoose.model("alaya",userSchema)