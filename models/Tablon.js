const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tablon_Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    leido: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref : 'user'
            } 
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            text : {
                type: String,
                required: true  
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now()
            },
        }
    ],
    date: {
        type: Date,
        default: Date.now()
    },

})

module.exports = Tablon = mongoose.model('post', Tablon_Schema)