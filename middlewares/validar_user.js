const {  check } = require('express-validator');
const { ExisteEmail } = require('../middlewares/validar_email');
const validarUser=

[

     check('nombre_completo', 'El username ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    check('email', 'el correo ingresado no contiene un formato correcto')
        .isString()
        .not()
        .isEmpty()
        .custom(ExisteEmail),
    
    check('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .isLength({ min: 7 })
    .not()
    .isEmpty(),
    
    check('carrera', 'la carrera ingresado no contiene un formato correcto')
    .isString()
        .not()
        .isEmpty(),
        

    check('año', 'El año ingresado no contiene un formato correcto')
        .isString()
        .not()
        .isEmpty(),

]

module.exports = {
    validarUser
}