const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema(
    {   
        movieName:String,
        count:Number
       

    },
    {collection:'movieName'}
)

const MovieModel = mongoose.model("MovieModel",MovieSchema)

module.exports = MovieModel;