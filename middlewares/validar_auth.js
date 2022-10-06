const { body, check } = require('express-validator');

const validarAuth=
[
    check('email', 'el correo ingresado no contiene un formato correcto')
    .isEmail()
    .not()
    .isEmpty(),

    check('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
]

module.exports = {
    validarAuth
}