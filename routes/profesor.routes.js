const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const {
    validar_jwt,
    validacionProfesor
}= require('../middlewares');

const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete,
    listarprof
}=  require('../controllers/profesor.controllers');

const { body, check } = require('express-validator');




//mostrar los profesor
router.get('/profesor/get',

rutaGet)

//mostrar listado de profesores

router.get('/profesor/get/listar',

listarprof
)

// agregar profesor
router.post('/profesor',
validacionProfesor,
validar_jwt,
 validarCampos,
rutaPost)



//ruta editar profesor
router.put('/profesor/:id',
validacionProfesor,
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar profesor
router.delete('/profesor/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar profesor logicamente
router.put('/profesor/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;