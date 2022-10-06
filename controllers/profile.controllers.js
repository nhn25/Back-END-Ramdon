const ctrlProfile = {};
const profile = require('../models/Profile');
const User=require('../models/users')
 require('../connection');


//ruta get profile 
 
ctrlProfile.rutaGet = async (req,res)=>{

        const profile= await profile.find().populate('userId','nombre_completo');
        res.json(profile);
        
}


//ruta get listar profile

ctrlProfile.listarprofile = async (req, res) => {
    const { limite = 5, desde = 0 } = req.query;

    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        profile.countDocuments(query),
        profile.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({ total, usuarios });
};

//ruta agregar profile

ctrlProfile.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const profile= new profile(body)

        await profile.save();
        res.json({msg: 'profileagregado'})
};

//ruta eliminar profile
ctrlProfile.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await profile.findByIdAndDelete(req.params.id);

            return res.json({msg: 'user removed'})
        } catch(error){
            console.log('error al eliminar user ',error)
        }
}



//ruta editar profile
ctrlProfile.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const { id } = req.params;
        
        try {
            const profile= await profile.findByIdAndUpdate(id, body);
            return res.json(profile)
        } catch (error) {
            console.log(`error al actulizar usuario: ${error}`)
        }

};


//eliminar profilelogicamente

ctrlProfile.rutaLogicalDelete= async (req, res)=>{

        const { id } = req.params;
        try {
            //Verifico que el usuario este activo
            const inactivo = await User.findById(id);

            /* console.log(inactivo) */
            if (!inactivo.profile) {
                return res.json({
                    msg: `El usuario ${id} no existe`
                });
            };

            const usuario = await User.findByIdAndUpdate(id, { profile: false });

            res.json({
                msg: 'Usuario borrado de la base de datos exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al borrar los datos del usuario: ', error);
        };
}



module.exports = ctrlProfile;