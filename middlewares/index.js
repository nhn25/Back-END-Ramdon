//optimizar las importaciones

const validarComentario= require('../middlewares/validar_comentario');
const validarEmail= require('../middlewares/validar_email');
const validarJWT=require('../middlewares/validar_jwt');
const validarMateria= require('../middlewares/validar_materia');
const validarCarrera= require('../middlewares/validar_carrera');
const validarProfesor= require('./validar_profesor');
const validarUser= require('../middlewares/validar_user')
const validarAuth= require('../middlewares/validar_auth');
const validarRol = require('../middlewares/validar_rol');
 module.exports={

        ...validarComentario,
        ...validarEmail,
        ...validarCarrera,
        ...validarJWT,
        ...validarMateria,
        ...validarProfesor,
        ...validarUser,
        ... validarAuth,
        ...validarRol
 }