const jwt = require('jsonwebtoken')
const AdminCtrl = {}
AdminCtrl.login=(req,res)=>{
  const body = req.body
  if(body.email === process.env.ADMINEMAIL && body.password === process.env.ADMINPASSWORD){
    const tokendata = {id: process.env.ID}
    const tokenAdmin= jwt.sign( tokendata,process.env.JWT_SECRET,{expiresIn:'14d'})
    res.json({token:tokenAdmin})
  }else{
    res.status(401).json("Invalid email or password")
  }
}
module.exports = AdminCtrl