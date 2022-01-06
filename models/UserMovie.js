const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name:{
        type:'String'
      
    },
    email:{
        type:'String',
        required:true
    },
    password:{
        type:'String'
    }
    },
    {collection:'user-data'}
)

const User = mongoose.model('UserData',UserSchema)

module.exports = User