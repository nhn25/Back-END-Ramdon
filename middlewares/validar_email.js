const Email = require('../models/users');

const ExisteEmail = async( email = '') => {
    const EmailEncontrado = await  Email.findOne({email});

    if(EmailEncontrado){
        throw new Error('El email ya existe')
    }
}

module.exports = {
    ExisteEmail 
}