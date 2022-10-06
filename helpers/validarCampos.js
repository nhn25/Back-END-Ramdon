const { validationResult } = require("express-validator");

//validar si hay o no errores en los distintos campos
const validarCampos = async (req, res, next) => {
    const errores = await validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    //si no hay errores sigue con la ejecucion del programa
    next();
};
module.exports = {
    validarCampos
}