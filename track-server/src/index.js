require('./models/User')
require('./models/Track')
const express= require('express')
const mongoose  = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth =  require('./middlewares/requireAuth')


const app= express()
const mongoURI= 'mongodb+srv://pinnu123:pinnu123@cluster0.sncsn.mongodb.net/<dbname>?retryWrites=true&w=majority'
app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


mongoose.connection.on('connected',()=> {
    console.log('Server running successfully')
})

mongoose.connection.on('error',(err)=> {
    console.error('This is the error', err)
})
app.get('/',requireAuth, (req,res)=> {
    res.send(`Your email id is : ${req.user.email}`)
})


app.listen(3000,()=> {
    console.log('Listening on 3000')
})