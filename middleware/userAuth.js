const jwt = require('jsonwebtoken')
const authenticateUser =(req,res,next)=>{
    const token = req.headers['authorization']
    if(token){
        try{
           const tokendata = jwt.verify(token,process.env.JWT_SECRET)
           next()  
        }catch(err){
            res.status(401).json(err)
        }  
    }else{
        res.status(400).json('token is required')
    }
}
module.exports = authenticateUser