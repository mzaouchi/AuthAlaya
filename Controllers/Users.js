const User = require("../Models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
exports.SignUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send({errors : [{msg : 'Email already exists'}]})
        }

        const newUser = new User(req.body)

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashedPassword

        await newUser.save()

        const payload = { id: newUser._id }
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '24h' })

        res.status(200).send({msg: "User added",newUser,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not SignUp"}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : "Email invalid"}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{msg :"Wrong password"}]})
        }

        const payload = { id: found._id }
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '24h' })

        res.status(200).send({msg : "Sign IN", found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not signIn"}]})
    }
}