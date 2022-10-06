const materia = require('../models/Materia');

//verificar si en la BD existe el rol ingresado por el usuario
const siExistemateria = async (materia = '')=> {
    const materiaEncontrada = await materia.findOne({materia})
    if(!materiaEncontrada){
        throw new Error('el materia especificado no existe')
    }
}

module.exports = {
    siExistemateria
}