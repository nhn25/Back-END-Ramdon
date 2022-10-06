const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');

const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete,
    listartablon
}=  require('../controllers/tablon.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validaciontablon
}= require('../middlewares');



//mostrar los tablon
router.get('/tablon/get',

rutaGet)


// agregar tablon
router.post('/tablon',
[
validar_jwt,
 validarCampos
],rutaPost)



//ruta editar tablon
router.put('/tablon/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar tablon
router.delete('/tablon/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar tablon logicamente
router.delete('/tablon/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;