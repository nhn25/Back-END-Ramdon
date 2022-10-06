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
            description: {
                type: String
            }
        }
    ],
    


});

module.exports = model('Profesor', ProfesorShema);