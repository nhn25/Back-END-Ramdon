const ctrlTablon = {};
const tablon = require('../models/Tablon');

//ruta get tablon
 
ctrlTablon.rutaGet = async (req,res)=>{

        const tablon = await tablon.find().populate('userId','nombre_usuario');
        res.json(tablon);
}

//ruta agregar tablon

ctrlTablon.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const tablon = new tablon(body)

        await tablon.save();
        res.json({msg: 'tablon agregado'})
};

//ruta editar tablon
ctrlTablon.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const { id } = req.params;
        
        try {
            const tablon = await tablon.findByIdAndUpdate(id, body);
            return res.json(tablon)
        } catch (error) {
            console.log(`error al actulizar tablon: ${error}`)
        }

};
//ruta eliminar tablon
ctrlTablon.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await tablon.findByIdAndDelete(req.params.id);

            return res.json({msg: 'tablon eliminado'})
        } catch(error){
            console.log('error al eliminar tablon',error)
        }
}

//eliminar tablonlogicamente

ctrlTablon.rutaLogicalDelete= async (req, res)=>{

    const { id } = req.params;
    try {
        //Verifico que el usuario este activo
        const inactivo = await User.findById(id);

        /* console.log(inactivo) */
        if (!inactivo.tablon) {
            return res.json({
                msg: `El usuario ${id} no existe`
            });
        };

        const usuario = await User.findByIdAndUpdate(id, { tablon: false });

        res.json({
            msg: 'Usuario borrado de la base de datos exitosamente',
            usuario
        });
    } catch (error) {
        console.log('Error al borrar los datos del usuario: ', error);
    };
}



module.exports = ctrlTablon;

