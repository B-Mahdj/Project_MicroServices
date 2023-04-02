const express = require('express');
const router = express.Router();

const proprieteController = require('./propriete-controller');

// Endpoint to get all properties
router.get('/', proprieteController.getAllProperties);

// Endpoint to get a property by ID
router.get('/:id', proprieteController.getproprieteById);

// Endpoint to create a new property
router.post('/', proprieteController.createpropriete);

// Endpoint to update a property by ID
router.put('/:id', proprieteController.updateproprieteById);

// Endpoint to delete a property by ID
router.delete('/:id', proprieteController.deleteproprieteById);

module.exports = router;


