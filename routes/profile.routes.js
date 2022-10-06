const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');

const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete,
    listarprofile
}=  require('../controllers/profile.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacionprofile
}= require('../middlewares');



//mostrar los profile
router.get('/profile/get',

rutaGet)

//mostrar listado de profiles

router.get('/profile/get/listar',

listarprofile
)

// agregar profile
router.post('/profile',
[
validar_jwt,
 validarCampos
],rutaPost)



//ruta editar profile
router.put('/profile/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar profile
router.delete('/profile/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar profile logicamente
router.put('/profile/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;