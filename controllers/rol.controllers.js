const ctrlrol = {};
const rol = require('../models/rol');

//ruta get rol
 
ctrlrol.rutaGet = async (req,res)=>{

        const rol = await rol.find().populate('userId','nombre_usuario');
        res.json(rol);
}

//ruta agregar rol

ctrlrol.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const rol = new rol(body)

        await rol.save();
        res.json({msg: 'rol agregado'})
};

//ruta editar rol
ctrlrol.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const { id } = req.params;
        
        try {
            const rol = await rol.findByIdAndUpdate(id, body);
            return res.json(rol)
        } catch (error) {
            console.log(`error al actulizar rol: ${error}`)
        }

};
//ruta eliminar rol
ctrlrol.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await rol.findByIdAndDelete(req.params.id);

            return res.json({msg: 'rol eliminado'})
        } catch(error){
            console.log('error al eliminar rol',error)
        }
}



module.exports = ctrlrol;

