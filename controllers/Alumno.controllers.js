const ctrlProf = {};
const alumno = require('../models/alumno');
const User=require('../models/users')
 require('../connection');


//ruta get alumno 
 
ctrlProf.rutaGet = async (req,res)=>{

        const alumno= await alumno.find().populate('userId','nombre_completo');
        res.json(alumno);
        
}


//ruta get listar alumno

ctrlProf.listarAlum = async (req, res) => {
    const { limite = 5, desde = 0 } = req.query;

    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        alumno.countDocuments(query),
        alumno.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({ total, usuarios });
};

//ruta agregar alumno

ctrlProf.rutaPost = async (req,res)=>{
    const {  DNI, CUIL, domicilio, localidad, tituloSecu } = req.body;

    try {
        const usuario = new User({  DNI, CUIL, domicilio, localidad, tituloSecu });

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

//ruta eliminar alumno
ctrlProf.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await alumno.findByIdAndDelete(req.params.id);

            return res.json({msg: 'user removed'})
        } catch(error){
            console.log('error al eliminar user ',error)
        }
}



//ruta editar alumno
ctrlProf.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const { id } = req.params;
        
        try {
            const alumno= await alumno.findByIdAndUpdate(id, body);
            return res.json(alumno)
        } catch (error) {
            console.log(`error al actulizar usuario: ${error}`)
        }

};


//eliminar alumnologicamente

ctrlProf.rutaLogicalDelete= async (req, res)=>{

        const { id } = req.params;
        try {
            //Verifico que el usuario este activo
            const inactivo = await User.findById(id);

            /* console.log(inactivo) */
            if (!inactivo.alumno) {
                return res.json({
                    msg: `El usuario ${id} no existe`
                });
            };

            const usuario = await User.findByIdAndUpdate(id, { alumno: false });

            res.json({
                msg: 'Usuario borrado de la base de datos exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al borrar los datos del usuario: ', error);
        };
}



module.exports = ctrlProf;