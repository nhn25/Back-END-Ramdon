const { body, check } = require('express-validator');
const validacionComentario=
[
    check('comentario', 'El comentario ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
  
]

module.exports = {
    validacionComentario
}