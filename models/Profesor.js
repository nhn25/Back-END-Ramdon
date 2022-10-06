const {model, Schema}= require('mongoose');
const {} = require('./users');
const  ProfesorShema = new Schema({

    userId:{type:Schema.Types.ObjectId, ref: 'User'
      },
      nombre_completo:{
        type: String,
        unique: [true, 'El nombre de usuario está duplicado'],
        required: [true, 'El nombre de usuario es necesario']
    },
    password:{
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    email:{
        type: String,
        unique: [true, 'El correo está duplicado'],
        required: [true, 'El correo es necesario']
    },
    carrera:[
        {
            type: String,
            required: [true, 'la carrera que enseña es necesaria']
        }
    ],
    materia:[
        {
            type: String,
            required: [true, "la materia que enseña es necesaria"]
        }

    ],
    experiencia: [
        {
            titulo: {
                type: String,
                required: true
            },
            facultad: {
                type: String,
                required: true
            },
            provincia: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    


});

module.exports = model('Profesor', ProfesorShema);