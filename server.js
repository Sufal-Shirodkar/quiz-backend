require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Config = require('./config/db')
const {checkSchema} = require('express-validator')
const userCtrl = require('./controllers/usersController')
const UserQuestionCtrl = require('./controllers/UserQuestionController')
const userValidationSchema = require('./validations/user-validation')
const authenticateUser = require('./middleware/userAuth')
const AdminCtrl = require('./controllers/adminController')
const adminQuestionCtrl = require('./controllers/adminQuestionController')
const questionValidationSchema = require('./validations/question-validation')
const authenticateAdmin=require('./middleware/auth')
Config()
const app = express()
app.use(express.json())
app.use(cors())
// admin urls

app.post('/api/admins/login',AdminCtrl.login) // generate the token for admin

app.post('/api/admins/questions',authenticateAdmin,checkSchema(questionValidationSchema),adminQuestionCtrl.Add)
app.get('/api/admins/questions',authenticateAdmin,adminQuestionCtrl.list)
app.delete('/api/admins/questions/:id',authenticateAdmin,adminQuestionCtrl.delete)
app.put('/api/admins/questions/:id',authenticateAdmin,checkSchema(questionValidationSchema),adminQuestionCtrl.update)
// users urls

app.post('/api/users/login',userCtrl.login) // generate the token for user

app.get('/api/users/questions',authenticateUser,checkSchema(userValidationSchema),UserQuestionCtrl.list)
app.listen(3050,()=>{
    console.log('server is running on port 3050')
})