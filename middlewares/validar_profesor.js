const { check } = require('express-validator');
const { siExistecarrera } = require('./validar_carrera');
const {ExisteEmail} = require('./validar_email');
const {siExistemateria} = require('./validar_materia');
const validacionProfesor=
[
  
    check('nombre_completo', 'El username ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    check('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .isLength({ min: 7 })
    .not()
    .isEmpty(),
    
     check('email', 'el correo ingresado no contiene un formato correcto')
        .isEmail()
        .not()
        .isEmpty()
        .custom(ExisteEmail),
    
    

        check('carrera', 'el carrera ingresado no contiene un formato correcto')
        .isArray()
        .not()
        .isEmpty()
        .custom(siExistecarrera),
    
  
   check('materia', 'el materia ingresado no contiene un formato correcto')
    .isArray()
    .not()
    .isEmpty()
    .custom(siExistemateria),

    check('titulo', 'la titulo ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    check('facultad', 'la facultad ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    check('provincia', 'la provincia ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    check('descripcion', 'la descripcion ingresada no contiene un formato correcto')
      .isString()
      .not()
      .isEmpty(),
  

   
]

module.exports = {
    validacionProfesor
}