const carrera = require('../models/Carrera');

//verificar si en la BD existe el rol ingresado por el usuario
const siExistecarrera = async (carrera = '')=> {
    const carreraEncontrada = await carrera.findOne({carrera})
    if(!carreraEncontrada){
        throw new Error('el carrera especificado no existe')
    }
}

module.exports = {
    siExistecarrera
}