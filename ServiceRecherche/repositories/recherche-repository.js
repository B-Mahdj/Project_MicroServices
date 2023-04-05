const db = require('../config/database');

const rechercheRepository = {};

rechercheRepository.getProprieteByType = async (type_m) => { 
  try {

    const [rows] = await db.execute('SELECT * FROM Propriete  WHERE type = ?', [type_m]); 
    
    if (rows.length === 0) {
      console.log(`Aucun logement trouvé`);
      return null;
    }
    console.log(`Logements récupérés avec succès`);
    return rows;
  } catch (err) {
    console.log(`Erreur lors de la récupération des logements`, err);
    throw err;
  }
};

rechercheRepository.getProprieteByPrice = async (prix_m) => { 
  try {
    const [rows] = await db.execute('SELECT * FROM Propriete  WHERE prix = ?', [prix_m]); 
    if (rows.length === 0) {
      console.log(`Aucun logement trouvé`);
      return null;
    }
    console.log(`Logements récupérés avec succès`);
    return rows;
  } catch (err) {
    console.log(`Erreur lors de la récupération des logements`, err);
    throw err;
  }
};

rechercheRepository.getProprieteByCity = async (ville_m) => { 
  try {
    const [rows] = await db.execute('SELECT * FROM Propriete  WHERE ville = ?', [ville_m]); 
    if (rows.length === 0) {
      console.log(`Aucun logement trouvé`);
      return null;
    }
    console.log(`Logements récupérés avec succès`);
    return rows;
  } catch (err) {
    console.log(`Erreur lors de la récupération des logements`, err);
    throw err;
  }
};

rechercheRepository.getAllPropriete = async () => {
  const [rows] = await db.execute('SELECT * FROM Propriete');
  return rows;
};


module.exports = rechercheRepository;
