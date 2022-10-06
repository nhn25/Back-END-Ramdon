const ctrlAuthUser = {};
const User=require('../models/users')
const Profesor = require('../models/profesor')
const {generate_jwt} = require('../helpers/generar_jwt');

//Login de usuarios

ctrlAuthUser.rutaGet = async (req,res)=>{

        const usuarioAuth = await User.find();
        res.json(usuarioAuth);
};


ctrlAuthUser.rutaLogin = async (req, res) => {

        const { email, password} = req.body;

        try {
            const usuarioAuth = await User.findOne({email, password});
               //Si lo encuentra

         const token = await generate_jwt(usuarioAuth.id); 
        
            //Muestra el token generado
            res.json({
                token     
            }); 

        } catch (error) {
            //Si no encuentra el usuarioAuth
        /*  if(!usuarioAuth){
            return res.status(401).json({
                msg: "usuarioAuth no existe"
            }) */
            console.log(error)
         };

        //verificamos si es un usuarioAuth activo
        
         /* if(!usuarioAuth.activo){
            res.status(401).json({
                //Si no lo encuentra activo al usuarioAuth pasa
                msg: "usuarioAuth no esta activo"
            })
         } */

        }
        

        
     


ctrlAuthUser.revalidarToken = async (req, res) => {

    const {_id } = req.usuario;

    const query = {userId: _id}

    const usuario = await User.findById(_id)

    const profesor= await profesor.find(query).populate('userId', 'nombre_completo')
    console.log(profesor)
    const token = await generate_jwt(_id);


    res.json({
        ok: true,
        msg: 'Token revalidado',
        usuario,
        profesor,
        token

    })
}


module.exports = ctrlAuthUser ;
