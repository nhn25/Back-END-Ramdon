const routermateria =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete
}=  require('../controllers/materia.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacionmateria
}= require('../middlewares');

//AÑADIR materiaS


//mostrar los materias
routermateria.get('/materia/get',

rutaGet)

//ruta agregar materias
routermateria.post('/materia',/* 
 validar_jwt, */
validarCampos,
rutaPost)


//ruta editar materia
routermateria.put('/materia/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar materia
routermateria.delete('/materia/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)




module.exports =routermateria;