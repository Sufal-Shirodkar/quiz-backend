const jwt = require('jsonwebtoken')
const authenticateAdmin =(req,res,next)=>{
    const token = req.headers['authorization']
    if(token){
        try{
         const tokenData = jwt.verify(token,process.env.JWT_SECRET)
         next()   
        }catch(err){
            res.status(401).json(err)
        }
    }else{
        res.status(400).json({error:'token is required'})
    }

}
module.exports = authenticateAdmin