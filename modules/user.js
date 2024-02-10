const mongoose = require('mongoose')
const {Schema,model} = mongoose
const UserSchema = new Schema({
    email:{
        Type:String
    },
    password:{
        Type:String
    }
})
const User = model('User',UserSchema)
module.exports = User