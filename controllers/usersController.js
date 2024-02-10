const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const userCtrl ={}
userCtrl.login = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
   if(body.email === process.env.EMAIL && body.password === process.env.PASSWORD){
    const tokendata = {id:process.env.ID}
    const tokenUser= jwt.sign(tokendata,process.env.JWT_SECRET,{expiresIn:'14d'})
    res.json({token:tokenUser})
   }else{
    res.status(401).json('Email or Password is invalid')
   }
}
module.exports = userCtrl