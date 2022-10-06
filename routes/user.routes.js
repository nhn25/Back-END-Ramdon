const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const { body, check } = require('express-validator');
const{
    rutaPost,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete, rutaGetID
}=  require('../controllers/user.controllers')

const {
    validar_jwt,
    validarUser,
    tieneRol
}= require('../middlewares')

//REGISTRO DE USUARIOS

//crear nuevo usuario
router.get('/get-user',


rutaGet)



//ruta agregar usuarios
router.post('/registro',

validarUser,
validarCampos,
rutaPost)


//ruta editar usuario
router.put('/edit-user/:id',

validar_jwt, 
validarUser,
tieneRol('ADMIN','PROFESOR','USUARIO_COMUN'), 
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar usuarios
router.delete('/delete-user/:id',
/* 
validar_jwt, */
tieneRol('ADMIN'),
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar usuario logicamente
router.put('/delete-user-logical/:id',

validar_jwt,
tieneRol('ADMIN'),
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;