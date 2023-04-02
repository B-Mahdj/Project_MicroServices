const proprieteRepository = require('../repositories/propriete-repository');

const proprieteService = {};

proprieteService.getAllProperties = async () => {
  try {
    return await proprieteRepository.getAllProperties();    
  } catch (error) {
    console.log('Error while fetching properties', error);
  }
};

proprieteService.getproprieteById = async (id) => {
  return await proprieteRepository.getproprieteById(id);
};

proprieteService.createpropriete = async (propriete) => {
  return await proprieteRepository.createpropriete(propriete);
};

proprieteService.updateproprieteById = async (id, propriete) => {
  return await proprieteRepository.updateproprieteById(id, propriete);
};

proprieteService.deleteproprieteById = async (id) => {
  return await proprieteRepository.deleteproprieteById(id);
};

module.exports = proprieteService;
