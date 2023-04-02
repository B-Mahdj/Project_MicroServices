const proprieteService = require('./propriete-service');

// const express = require('express');
// const router = express.Router();

const proprieteController = {};

// Controller function to get all properties
proprieteController.getAllProperties = async (req, res) => {
  try {
    const properties = await proprieteService.getAllProperties();
    res.send(properties);
  } catch (error) {
    res.status(500).send({ message: 'Une erreur est survenue lors de la récupération des propriétés.' });
  }
};

// Controller function to get a propriete by ID
proprieteController.getproprieteById = async (req, res) => {
  const id = req.params.id;
  try {
    const propriete = await proprieteService.getproprieteById(id);
    res.send(propriete);
  } catch (error) {
    res.status(500).send({ message: 'Une erreur est survenue lors de la récupération de la propriété.' });
  }
};

// Controller function to create a new propriete
proprieteController.createpropriete = async (req, res) => {
  const propriete = req.body;
  try {
    await proprieteService.createpropriete(propriete);
    res.send({ message: 'La propriété a été créée avec succès.' });
  } catch (error) {
    res.status(500).send({ message: 'Une erreur est survenue lors de la création de la propriété.' });
  }
};

// Controller function to update a propriete by ID
proprieteController.updateproprieteById = async (req, res) => {
  const id = req.params.id;
  const propriete = req.body;
  try {
    await proprieteService.updateproprieteById(id, propriete);
    res.send({ message: 'La propriété a été mise à jour avec succès.' });
  } catch (error) {
    res.status(500).send({ message: 'Une erreur est survenue lors de la mise à jour de la propriété.' });
  }
};

// Controller function to delete a propriete by ID
proprieteController.deleteproprieteById = async (req, res) => {
  const id = req.params.id;
  try {
    await proprieteService.deleteproprieteById(id);
    res.send({ message: 'La propriété a été supprimée avec succès.' });
  } catch (error) {
    res.status(500).send({ message: 'Une erreur est survenue lors de la suppression de la propriété.' });
  }
};

module.exports = proprieteController;