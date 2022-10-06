const ctrlAdmin = {};
const admin = require('../models/Admin');
const User=require('../models/users')
 require('../connection');


//ruta get admin 
 
ctrlAdmin.rutaGet = async (req,res)=>{

        const admin= await admin.find().populate('userId','nombre_completo');
        res.json(admin);
        
}


//ruta get listar admin

ctrlAdmin.listaradmin = async (req, res) => {
    const { limite = 5, desde = 0 } = req.query;

    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        admin.countDocuments(query),
        admin.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({ total, usuarios });
};

//ruta agregar admin

ctrlAdmin.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const admin= new admin(body)

        await admin.save();
        res.json({msg: 'adminagregado'})
};

//ruta eliminar admin
ctrlAdmin.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await admin.findByIdAndDelete(req.params.id);

            return res.json({msg: 'user removed'})
        } catch(error){
            console.log('error al eliminar user ',error)
        }
}



//ruta editar admin
ctrlAdmin.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const { id } = req.params;
        
        try {
            const admin= await admin.findByIdAndUpdate(id, body);
            return res.json(admin)
        } catch (error) {
            console.log(`error al actulizar usuario: ${error}`)
        }

};


//eliminar adminlogicamente

ctrlAdmin.rutaLogicalDelete= async (req, res)=>{

        const { id } = req.params;
        try {
            //Verifico que el usuario este activo
            const inactivo = await User.findById(id);

            /* console.log(inactivo) */
            if (!inactivo.admin) {
                return res.json({
                    msg: `El usuario ${id} no existe`
                });
            };

            const usuario = await User.findByIdAndUpdate(id, { admin: false });

            res.json({
                msg: 'Usuario borrado de la base de datos exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al borrar los datos del usuario: ', error);
        };
}



module.exports = ctrlAdmin;