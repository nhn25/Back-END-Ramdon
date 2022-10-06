const routercarrera =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete
}=  require('../controllers/carrera.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacioncarrera
}= require('../middlewares');

//AÑADIR carreraS


//mostrar los carreras
routercarrera.get('/carrera/get',

rutaGet)

//ruta agregar carreras
routercarrera.post('/carrera',
 validar_jwt,
validarCampos,
rutaPost)


//ruta editar carrera
routercarrera.put('/carrera/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar carrera
routercarrera.delete('/carrera/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)




module.exports =routercarrera;