const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const watchSchema = new Schema(
    {
        email:{
             type:String
        },
        watchlist:{
             type:[String]
        }
    },
    {collection:'watchlist-data'}
)

const Watch = mongoose.model('WatchListData',watchSchema)
module.exports = Watch