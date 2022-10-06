const routercomentario =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete
}=  require('../controllers/comentarios.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacionComentario
}= require('../middlewares');

//AÑADIR COMENTARIOS


//mostrar los comentarios
routercomentario.get('/comentario/get',

rutaGet)

//ruta agregar comentarios
routercomentario.post('/comentario',
 validar_jwt,
 validacionComentario,
validarCampos,
rutaPost)


//ruta editar comentario
routercomentario.put('/comentario/:id',
validar_jwt,
validacionComentario,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar comentario
routercomentario.delete('/comentario/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)




module.exports =routercomentario;