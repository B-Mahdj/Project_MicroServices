const proprieteRepository = require('../repositories/propriete-repository');

const proprieteService = {};

proprieteService.getAllProperties = async () => {
  try {
    return await proprieteRepository.getAllProperties();    
  } catch (error) {
    console.log('Erreur lors de la recuperation des proprietes', error);
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

proprieteService.updateDispoById = async (id, isDispo) => {
  try {
    const rowsAffected = await proprieteRepository.updateDispoById(id, isDispo);
    return rowsAffected;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

proprieteService.changeDispo = async (id) => {
  try {
    const propriete = await proprieteRepository.getproprieteById(id);
    if (!propriete) {
      console.log(`Aucune propriete trouve ${id}`);
      return 0;
    }
    const isDispo = propriete.dispo === 0 ? 1 : 0;
    const result = await proprieteRepository.updateDispoById(id, isDispo);
    console.log(`Propriete avec le numero ${id} mise a ${isDispo} avec succes`);
    return result;
  } catch (err) {
    console.log(`Erreur lors de la mise à jour de la propriete numero ${id}`, err);
    throw err;
  }
};



module.exports = proprieteService;
