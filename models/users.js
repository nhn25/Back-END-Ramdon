const {model, Schema}= require('mongoose');

const UserShema = new Schema({
    nombre_completo:{
        type:String,
        unique: [true, 'El nombre de usuario está duplicado'],
        required: [true, 'El nombre de usuario es necesario']
    },
    email:{
        type: String,
        unique: [true, 'El correo está duplicado'],
        required: [true, 'El correo es necesario']
    },
    password:{
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    rol:{
        type:String,
        default:"USUARIO_COMUN"
    },
    estado:{
        type: Boolean,
        default: true
    },
    carrera:
        {
            type: String,
            required: [true, 'la carrera que cursa es necesaria']
        }
    ,
    año:
        {
            type: String,
            required: [true, "el año que cursa es necesario"]
        }
    
});

module.exports = model('User', UserShema);