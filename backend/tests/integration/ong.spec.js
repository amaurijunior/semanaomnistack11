const request = require('supertest');

const app = require('../../src/app');

const connection = require('../../src/database/connection');

describe('ONG', ()=>{

        beforeEach(async()=>{
                
                await  connection.migrate.rollback();
                await  connection.migrate.latest();


        });

        afterAll(async()=>{

               await connection.destroy();
        })

        it('should be able to create new ONG', async ()=>{

                const response =  await request(app).post('/ongs').send({
                name: "TST1",
	        email:"amauri@amauri.com",
	        whats:"19997448227",
	        city:"lugarnenhum",
	        uf:"sp"


                });

                console.log(response.body);

        });

});