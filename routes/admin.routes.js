const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');

const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete,
    listaradmin
}=  require('../controllers/admin.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacionadmin
}= require('../middlewares');



//mostrar los admin
router.get('/admin/get',

rutaGet)

//mostrar listado de admin

router.get('/admin/get/listar',

listaradmin
)

// agregar admin
router.post('/admin',
[
validar_jwt,
 validarCampos
],rutaPost)



//ruta editar admin
router.put('/admin/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar admin
router.delete('/admin/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar admin logicamente
router.put('/admin/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;