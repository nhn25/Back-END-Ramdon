const {model, Schema}= require('mongoose');
const {} = require('./users');
const  CuatrimestreShema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    carrera:[
        {
            type: String,
            required: [true, 'la carrera que cursa es necesaria']
        }
    ],
    materia:[
        {
            type: String,
            required: [true, "la materias que cursa es necesaria"]
        }

    ],
    año:[
        {
            type: date,
            required: [true, "el año que cursa es necesario"]
        }
    ],
    PrimerParcial: [
        {
            nota: {
                type: date
            }
        }
    ],
    SegundoParcial: [
        {
            nota: {
                type: date
            }
        }
    ],
    Recuperatorio: [
        {
            nota: {
                type: date
            }
        }
    ],
    Final: [
        {
            nota: {
                type: date
            }
        }
    ],


});

module.exports = model('Cuatrimestre', CuatrimestreShema);