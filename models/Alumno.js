const {model, Schema}= require('mongoose');
const {} = require('./users');
const  AlumnoShema = new Schema({

    userId:{type:Schema.Types.ObjectId, ref: 'User'
      },
      nombre_completo:{
        type: String,
        unique: [true, 'El nombre de usuario está duplicado'],
        required: [true, 'El nombre de usuario es necesario']
    },
    DNI: {
    type: String
},
CUIL: {
    type: String
},
domicilio: {
    type: String
},
localidad: {
    type: String
},
tituloSecu: {
    type: String
    
}
});

module.exports = model('Alumno', AlumnoShema);
