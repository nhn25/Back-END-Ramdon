const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const {
    validar_jwt,
    validacionAlumno
}= require('../middlewares');

const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete,
    listarAlum
}=  require('../controllers/alumno.controllers');

const { body, check } = require('express-validator');




//mostrar los alumno
router.get('/alumno/get',

rutaGet)

//mostrar listado de alumnoes

router.get('/alumno/get/listar',

listarAlum
)

// agregar alumno
router.post('/alumno',
validacionAlumno,
validar_jwt,
 validarCampos,
rutaPost)



//ruta editar alumno
router.put('/alumno/:id',
validacionAlumno,
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar alumno
router.delete('/alumno/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar alumno logicamente
router.put('/alumno/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;