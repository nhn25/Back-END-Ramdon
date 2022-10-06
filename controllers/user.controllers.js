const ctrlUser = {};
const User = require('../models/users');

//mostrar todos los usuarios
ctrlUser.rutaGet = async (req,res)=>{

        const usuario = await User.find();
        res.json(usuario);
};

//mostrar usurios por email

ctrlUser.rutaGetID = async (req,res)=>{
    const { email } = req.params;
    const usuario = await User.find(email);
    res.json(usuario);
};

//agrega el usuario

ctrlUser.rutaPost = async (req,res)=>{
     
        const { nombre_completo, email, password, carrera, año} = req.body;

        try {
            const usuario = new User({ nombre_completo, email, password, carrera, año});

            //Guardar usuario en db
            await usuario.save();

            res.json({
                msg: 'Usuario agregado exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al guardar los datos del usuario: ', error);
        };
};



//edita el usuario

ctrlUser.rutaPut = async (req , res)=>{

        const { id } = req.params;
        const { _id, email, password, ...resto } = req.body;

        try {
        
            const usuario = await User.findByIdAndUpdate(id, resto, { new: true });

            res.json({
                msg: 'Datos del usuario actualizados exitosamente',
                usuario
            });

        } catch (error) {
            console.log('Error al actualizar los datos del usuario: ', error);
        }

};

//borrar usuario de la base de datos 
ctrlUser.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await User.findByIdAndDelete(req.params.id);

            return res.json({msg: 'user removed'})
        } catch(error){
            console.log('error al eliminar user ',error)
        }
};



// eliminacion logica
ctrlUser.rutaLogicalDelete= async (req, res)=>{

        const { id } = req.params;
        try {
            //Verifico que el usuario este activo
            const inactivo = await User.findById(id);

            /* console.log(inactivo) */
            if (!inactivo.estado) {
                return res.json({
                    msg: `El usuario ${id} no existe`
                });
            };

            const usuario = await User.findByIdAndUpdate(id, { estado: false });

            res.json({
                msg: 'Usuario borrado de la base de datos exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al borrar los datos del usuario: ', error);
        };
}

module.exports = ctrlUser;

