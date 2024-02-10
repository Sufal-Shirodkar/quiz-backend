const mongoose = require('mongoose')
const Config = async()=>{
    try{
       const response = await  mongoose.connect('mongodb://127.0.0.1:27017/quiz-app')
       console.log('successfully connected to database')
    }catch(err){
        console.log('err in conect to the database')
    }
}
module.exports = Config