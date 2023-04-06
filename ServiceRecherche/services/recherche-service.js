const rechercheRepository = require('../repositories/recherche-repository');

const rechercheService = {};

rechercheService.getProprieteByType  = async (type) => {
  return await rechercheRepository.getProprieteByType(type);
};

rechercheService.getProprieteByPrice  = async (prix) => {
  return await rechercheRepository.getProprieteByPrice(prix);
};
 
rechercheService.getProprieteByCity  = async (ville) => {
  return await rechercheRepository.getProprieteByCity(ville);
};

rechercheService.getAllPropriete  = async () => {
  return await rechercheRepository.getAllPropriete();
};


module.exports = rechercheService;
