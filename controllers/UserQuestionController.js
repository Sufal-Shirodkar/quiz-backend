
const Question=require('../modules/Question')
const UserQuestionCtrl = {}
UserQuestionCtrl.list= async(req,res)=>{
    try{
     const response = await  Question.find() 
     res.json(response)   
    }catch(err){
        res.status(500).json({error:'Internal server Error'})
        console.log(err)
    }
         
}
module.exports = UserQuestionCtrl