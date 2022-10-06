const jwt = require('jsonwebtoken');
const {} = require('morgan');
const User = require('../models/users');

const validar_jwt = async (req, res, next) => {

    const token = req.header('token');

    console.log(token)
    //verifica si el token esta en el header para aprobar el ingreso

    if(!token) {
        
        return res.status(401).json({message: 'invalid token1'});

    };

//si el token existe entonces

    try {

        const {id}= jwt.verify(token,process.env.SECRET_KEY)
        
        //si el id no tiene el permiso se niega el ingreso
        if (!id) {
            return res.status(401).json({message: 'token invalido2'})
        }
    

        //buscamos el usuario en la BaseDeDatos

        const usuario = await User.findById(id);

        if (!usuario) {
            return res.status(401).json({message: 'usuario no existe'})
        }

        req.usuario = usuario;
    
        next();
    } catch (error){
        console.log(error)
    return res.status(401).json({
        message:"token invalido3"
    })

    }

}

module.exports={ validar_jwt}