const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/UserMovie')
const Watch = require('./models/watch')

app.use(express.json())

app.use(cors()) // middle ware


try{
    mongoose.connect("mongodb+srv://khan:7866@cluster0.kkded.mongodb.net/MoviesApp?retryWrites=true&w=majority")
}
catch(error){
    console.log("this is my error!!",error.message)
}








app.post('/api/signup',async (req,res)=>{
    console.log(req.body)
    try{
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.json({
            status:'ok',
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
    }
    catch(err){
        res.json({
            status:'error'
        })
    }
    
})



app.post('/api/watchlist',async (req,res)=>{
   
    
    try {
        const watch = await Watch.findOneAndUpdate({
            email: req.body.email
        }, {
            $addToSet: {
                watchlist: req.body.watchlist
            }
        }, { upsert: true });
    
        } catch (error) {
        console.log("my error data=", error);
        }

})

app.post('/api/login',async (req,res)=>{
        console.log(req.body)
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(user){
            return res.json({
            status:'login successful',
            user:true,
            email:req.body.email,
            password:req.body.password})
        }
        else{
            return res.json({status:'login failed',user:false})
        }
    }
   
    
)

app.use(function(req,res,error,next){
    res.status(400||401||500);
    res.json({
        error:{
            message:error.message
        }
    })
})

app.listen(process.env.PORT || 4000,()=>{
    console.log('server started on 4000')
})

