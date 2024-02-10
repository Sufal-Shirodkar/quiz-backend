const Question = require('../modules/Question')
const {validationResult} = require('express-validator')
const adminQuestionCtrl={}
 adminQuestionCtrl.Add= async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
    const q1 = new Question(body)
    try{
     const response = await q1.save()
    res.json(response)   
    }catch(err){
        res.json({notice:'internal server error'})
        console.log(err)
    }
    
}
adminQuestionCtrl.list=async(req,res) =>{
    try{
        const response = await Question.find()
        res.json(response)
    }catch(err){
        console.log(err)
        res.json({notice:"internal server error"})
    }
}
adminQuestionCtrl.delete = async(req,res) =>{
    const id = req.params.id
    try{
        const response = await Question.findByIdAndDelete(id)
        res.json(response)
    }catch(err){
        console.log(err)
        res.json({notice:'internal server error'})
    }
}
adminQuestionCtrl.update = async(req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    const body = req.body
    try{
        const response = await  Question.findByIdAndUpdate(id,body,{new:true})
        res.json(response)
    }catch(err){
        console.log(err)
        res.json({notice:'internal server error'})
    }
}
module.exports = adminQuestionCtrl