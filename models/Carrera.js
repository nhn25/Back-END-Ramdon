const {model, Schema}= require('mongoose');
const {} = require('./users');

const CarreraSchema = new Schema({

  userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    carrera:{
       type:String,
       required: [true, "la carrera es necesaria"]

    },
    año:{
        type: String,
        required: [true, 'los años de la carrera son necesarios']
    }
  });

module.exports = model('Carrera', CarreraSchema);