const rechercheService = require('./recherche-service');

const rechercheController = {};

// Controller function to get reservations by locataire ID
rechercheController.getProprieteByType = async (req, res) => {
  const type_m = req.params.type;
  try {
    const recherches = await rechercheService.getProprieteByType(type_m);
    if (recherches === null) {
      res.status(404).send({ message: `Aucun logement trouvés` });
    } else {
      res.send(recherches);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: `Une erreur est survenue lors de la récupération des logements` });
  }
};


rechercheController.getProprieteByPrice = async (req, res) => {
  const prix_m = req.params.prix;
  try {
    const recherches = await rechercheService.getProprieteByPrice(prix_m);
    if (recherches === null) {
      res.status(404).send({ message: `Aucun logement trouvé` });
    } else {
      res.send(recherches);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: `Une erreur est survenue lors de la récupération des logements` });
  }
};


rechercheController.getProprieteByCity = async (req, res) => {
  const ville_m = req.params.ville;
  try {
    const recherches = await rechercheService.getProprieteByCity(ville_m);
    if (recherches === null) {
      res.status(404).send({ message: `Aucun logement trouvé` });
    } else {
      res.send(recherches);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: `Une erreur est survenue lors de la récupération des logements` });
  }
};


rechercheController.getAllPropriete = async (req, res) => {
  try {
    const propriete = await rechercheService.getAllPropriete();
    res.send(propriete);
  } catch (error) {
    res.status(500).send({ message: 'Une erreur est survenue lors de la récupération des logements.' });
  }
};





module.exports = rechercheController;