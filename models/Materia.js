const {model, Schema}= require('mongoose');

const MateriaSchema = new Schema({


    materia:{
       type:String

    }
  });

module.exports = model('Materia', MateriaSchema);