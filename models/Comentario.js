const {model, Schema}= require('mongoose');
const {} = require('./users');

const ComentariosSchema = new Schema({

  //hacer otra id dentro de el esquema(para el receptor)

  userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    comentario:{
       type:String
       

    }

  });

module.exports = model('Comentarios',  ComentariosSchema);