const ctrlHome = {};
const Comentario = require('../models/comentario');

//ruta get users 
 
ctrlHome.rutaGet = async (req,res)=>{

        const comentario = await Comentario.find().populate('userId','nombre_usuario');
        res.json(comentario);
}

//ruta agregar users

ctrlHome.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const comentario = new Comentario(body)

        await comentario.save();
        res.json({msg: 'comentario agregado'})
};

//ruta editar users
ctrlHome.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const { id } = req.params;
        
        try {
            const comentario = await Comentario.findByIdAndUpdate(id, body);
            return res.json(comentario)
        } catch (error) {
            console.log(`error al actulizar comentario: ${error}`)
        }

};
//ruta eliminar users
ctrlHome.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await Comentario.findByIdAndDelete(req.params.id);

            return res.json({msg: 'comentario eliminado'})
        } catch(error){
            console.log('error al eliminar comentario',error)
        }
}



module.exports = ctrlHome;

