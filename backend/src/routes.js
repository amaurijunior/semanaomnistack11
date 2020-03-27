const express = require('express');
const { celebrate, Segments,Joi} = require('celebrate')

const crypto = require('crypto');

const routes = express.Router();

const ongcontroller = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessioncontroller');

routes.post('/session',sessioncontroller.create);

routes.get('/ongs', ongcontroller.index);

routes.post('/ongs',  celebrate({
        [Segments.BODY]: Joi.object().keys({

            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whats: Joi.string().required().length(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2)



        })

}) , ongcontroller.create);

routes.get('/profile',celebrate({
        [Segments.HEADERS]: Joi.object({ authorization: Joi.string().required(),
        }).unknown(),


}) ,profilecontroller.index);

routes.post('/incidents', incidentcontroller.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),

    })

}) ,incidentcontroller.index);


routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({

        id: Joi.number().required(),


    })

}), incidentcontroller.delete);

module.exports = routes;
