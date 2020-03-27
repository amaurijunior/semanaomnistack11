const connection = require('../database/connection');

const crypto = require('crypto');


const generateuniqueid = require('../utils/generateuniqueid')

module.exports = {


    async index(request,response){


        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);

    },

    async create(request,response){



    const {name , email , whats, city , uf} = request.body;

    const id = generateuniqueid();

    await connection('ongs').insert({
        id,
        name,
        email,
        whats,
        city,
        uf

    })

    //console.log(data);

return response.json({ id }
    );
}


}