const mongoose = require('mongoose')
const {Schema,model} = mongoose
const QuestionSchema = new Schema ({
    title: {
        type:String
    },
    options:{
        type:Object
    },
    correct:{
        type:String
    }
})
const Question = model('Question',QuestionSchema)
module.exports = Question
