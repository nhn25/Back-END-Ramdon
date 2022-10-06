const ctrlCarrera = {};
const carrera = require('../models/Carrera');

//ruta get carrera
 
ctrlCarrera.rutaGet = async (req,res)=>{

        const carrera = await carrera.find().populate('userId','nombre_usuario');
        res.json(carrera);
}

//ruta agregar carrera

ctrlCarrera.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const carreras = new carreras(body)

        await carreras.save();
        res.json({msg: 'carrera agregado'})
};

//ruta editar carrera
ctrlCarrera.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id

        const { id } = req.params;
        
        try {
            const carrera = await carrera.findByIdAndUpdate(id, body);
            return res.json(carrera)
        } catch (error) {
            console.log(`error al actulizar carrera: ${error}`)
        }

};
//ruta eliminar carrera
ctrlCarrera.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await carrera.findByIdAndDelete(req.params.id);

            return res.json({msg: 'carrera eliminado'})
        } catch(error){
            console.log('error al eliminar carrera',error)
        }
}



module.exports = ctrlCarrera;

