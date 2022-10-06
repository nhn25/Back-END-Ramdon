const {model, Schema}= require('mongoose');
const {} = require('./users');

const RolSchema = new Schema({

  userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    rol:{
       type:String,
       required: [true, "la materia es necesaria"]

    }
  });

module.exports = model('Rol', RolSchema);