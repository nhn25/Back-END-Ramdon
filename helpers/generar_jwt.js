const jwt = require('jsonwebtoken');
require("dotenv").config();
const generate_jwt = (id = '') => {

    return new Promise((resolve, reject) => {

        //identificate the user

        const payload = {
            id
        }

            // hash the SECRET_KEY 
        jwt.sign(payload, process.env.SECRET_KEY,(error, token) => {

            if (error) {
                reject(`Error to generate token nr: ${error}`);
            }
            
            resolve(token);
        });


    });



};

module.exports ={
    generate_jwt
}