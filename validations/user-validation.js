const userValidationSchema ={
    email :{
        notEmpty:{
            errorMessage:'Email is required'
        },
        isEmail:{
            errorMessage:'Enter valid Email'
        }
    },
    password:{
        notEmpty:{
            errorMessage: ' Password is required'
        }
    }
}
module.exports = userValidationSchema