const express = require('express');
const router = express.Router();

const rechercheController = require('./recherche-controller');

router.get('/', rechercheController.getAllPropriete);

router.get('/type/:type', rechercheController.getProprieteByType);

router.get('/budget/:prix', rechercheController.getProprieteByPrice);

router.get('/emplacement/:ville', rechercheController.getProprieteByCity);

module.exports = router;


