const router = require('express').Router();
const {
    validarCampos
} = require('../helpers/validarCampos');

const {
    rutaLogin,
    rutaGet,
    revalidarToken
} = require('../controllers/auth.controllers')

const {
    validarAuth,
    validar_jwt
} = require('../middlewares');

//RUTA LOGIN

//mostrar los usuarios logueados 
router.get('/get-auth', rutaGet)

//ruta TOKEN

router.get('/get-userID', [validar_jwt], revalidarToken)

//loguearse
router.post('/auth/login',

    validarAuth,
    validarCampos,

    rutaLogin)

module.exports = router;