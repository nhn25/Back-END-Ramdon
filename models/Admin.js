const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    asistenciasAlum: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        carrera: [{
            type: String,
            required: [true, 'la carrera que cursa es necesaria']
        }],
        materia: [{
                type: String,
                required: [true, "la materias que cursa es necesaria"]
            }

        ],
        año: [{
            type: String,
            required: [true, "el año que cursa es necesario"]
        }],
        inasistencias: [{
            type: String,
            required: [true, "la inasistencia es necesaria"]
        }]
    }]
})

module.exports = Admin = mongoose.model('admin', AdminSchema)