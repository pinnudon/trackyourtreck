const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')


module.exports = (req,res,next)=> {
    const {authorization} = req.headers
// authorization === Bearer lalfksgjksgnklaas
    if (!authorization){
        return res.status(401).send({error: 'You must be logged in'})
    }

    const token = authorization.replace('Bearer ', '')

    jwt.verify(token, 'pinnudon', async (err, payload)=> {
        if (err){
            return res.status(401).send({error: 'You must be logged in'})
        }

        // const { userId } = payload
        const user = await User.findById(payload.userID)
        req.user = user
        next()
    })
}