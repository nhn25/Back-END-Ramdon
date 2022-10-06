const  mongoose  = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    education:[
        {
            tituloSecu: {
            type: String
            },
            tituloUni: {
                type: String
            },
            to: {
                type: Date
            },
            description: {
                type: String
            }
        }
    ],
    social: {
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)