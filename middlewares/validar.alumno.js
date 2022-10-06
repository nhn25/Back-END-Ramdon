const { check } = require('express-validator');
const validacionAlumno=
[
    check('DNI', 'El DNI ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

check('CUIL', 'El CUIL ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

check('domicilio', 'El domicilio ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

check('localidad', 'El localidad ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

check('tituloSecu', 'El tituloSecundario ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
]
    module.exports = {
        validacionAlumno
    }
