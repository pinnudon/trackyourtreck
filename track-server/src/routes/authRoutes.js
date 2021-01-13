const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')
const router = express.Router()




router.post('/signup', async (req,res)=> {
    try{
        const {email,password} = req.body
        const user = new User({email, password})
    
        await user.save()
        const token = jwt.sign({userID : user._id}, 'pinnudon')
        res.send({token : token})
    } catch(err){
        return res.status(422).send(err.message)
    }

})

router.post('/signin', async (req, res)=> {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(422).send({error: 'Must provide email and password'})
    }

    const user = await User.findOne({email})
    console.log(user.email,user.password)

    if(!user){
        return res.status(422).send({error: 'Invalid email'})
    }
    try {
        await user.comparePassword(password)
        const token = jwt.sign({userId : user._id}, 'pinnudon')
        res.send({token: token})
    } catch(err){
        console.log(err)
        return res.status(422).send(err)
        
    }
})

module.exports = router