const routerrol =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut
}=  require('../controllers/rol.controllers');

const { check } = require('express-validator');

const {
    validar_jwt
}= require('../middlewares');

//AÑADIR rolS


//mostrar los rol
routerrol.get('/rol/get',

rutaGet)

//ruta agregar rol
routerrol.post('/rol',/* 
 validar_jwt, */
validarCampos,
rutaPost)


//ruta editar rol
routerrol.put('/rol/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar rol
routerrol.delete('/rol/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)




module.exports =routerrol;