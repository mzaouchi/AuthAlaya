const express = require('express')
const { SignUp, SignIn } = require('../Controllers/Users')
const { signUpValidator, validation, signInValidator } = require('../Middlewares/Validator')
const { isAuth } = require('../Middlewares/isAuth')



const userRouter = express.Router()

userRouter.post('/SignUp',signUpValidator,validation,SignUp)

userRouter.post('/SignIn',signInValidator,validation,SignIn)

userRouter.get('/getCurrentUser',isAuth,(req,res)=> res.send(req.user))

module.exports = userRouter