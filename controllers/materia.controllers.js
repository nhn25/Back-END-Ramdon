const ctrlMateria = {};
const materia = require('../models/Materia');

//ruta get materia
 
ctrlMateria.rutaGet = async (req,res)=>{

        const materia = await materia.find().populate('userId','nombre_usuario');
        res.json(materia);
}

//ruta agregar materia

ctrlMateria.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const materia = new materia(body)

        await materia.save();
        res.json({msg: 'materia agregado'})
};

//ruta editar materia
ctrlMateria.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const { id } = req.params;
        
        try {
            const materia = await materia.findByIdAndUpdate(id, body);
            return res.json(materia)
        } catch (error) {
            console.log(`error al actulizar materia: ${error}`)
        }

};
//ruta eliminar materia
ctrlMateria.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await materia.findByIdAndDelete(req.params.id);

            return res.json({msg: 'materia eliminado'})
        } catch(error){
            console.log('error al eliminar materia',error)
        }
}



module.exports = ctrlMateria;

