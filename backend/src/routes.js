const express = require('express');

const crypto = require('crypto');

const routes = express.Router();

const ongcontroller = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessioncontroller');

routes.post('/session',sessioncontroller.create);

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);

routes.get('/profile', profilecontroller.index);

routes.post('/incidents', incidentcontroller.create);
routes.get('/incidents', incidentcontroller.index);
routes.delete('/incidents/:id', incidentcontroller.delete);

module.exports = routes;
