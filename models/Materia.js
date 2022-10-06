const {model, Schema}= require('mongoose');
const {} = require('./users');

const MateriaSchema = new Schema({

  userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    materia:{
       type:String,
       required: [true, "la materia es necesaria"]

    }
  });

module.exports = model('Materia', MateriaSchema);