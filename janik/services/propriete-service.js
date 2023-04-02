const proprieteRepository = require('../repositories/propriete-repository');

const proprieteService = {};

proprieteService.getAllProperties = async () => {
  return await proprieteRepository.getAllProperties();
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
