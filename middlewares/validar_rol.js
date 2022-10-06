const { response } = require("express");


//Verifica rol del usuario y los permisos 
const tieneRol = (...roles) => {
    return (req, res = response, next) => {
        console.log(req.usuario)
        
        // Se verifica si existe el usuario en la peticion
        if(!req.usuario) {
            return res.status(500).json({
                msg:'Se quiere verificar rol sin validar el token'
            })
        };

        console.log(roles)
        console.log(!roles.includes(req.usuario.rol))
        //const rolUser = req.usuario.rol
        // Se verifica si el rol del usuario es alguno de los permitidos
        if( !roles.includes(req.usuario.rol)){
            return res.status(401).json({
                msg: `Se requieren alguno de los siguientes roles ${roles}`
            })
        }
    

        next();
    };
}

module.exports = {
    tieneRol
}