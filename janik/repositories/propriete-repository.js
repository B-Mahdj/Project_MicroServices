const db = require('../config/database');

const proprieteRepository = {};

proprieteRepository.getAllProperties = async () => {
  const [rows] = await db.execute('SELECT * FROM Propriete');
  return rows;
};

proprieteRepository.getproprieteById = async (id) => {
  try {
    const [rows] = await db.execute('SELECT * FROM Propriete WHERE id_propriete = ?', [id]);
    if (rows.length === 0) {
      console.log(`No propriete found with id ${id}`);
      return null;
    }
    console.log(`propriete with id ${id} fetched successfully`);
    return rows[0];
  } catch (err) {
    console.log(`Error while fetching propriete with id ${id}`, err);
    throw err;
  }
};

// proprieteRepository.createpropriete = async (propriete) => {
//   try {
//     // Vérifier les propriétés de l'objet "propriete"
//     // if (!propriete || !propriete.type || !propriete.ville) {
//     //   throw new Error("Missing required property in propriete object.");
//     // }

//     // Exécuter la requête 
//     const request = ('INSERT INTO Propriete SET ?' ,[propriete]);
//     console.log(request);
//     const [result] = await db.execute('INSERT INTO Propriete SET ?', [propriete]);
//     console.log('New propriete created successfully');
//     return result.insertId;
//   } catch (err) {
//     console.log('Error while creating new propriete', err);
//     throw err;
//   }
// };


proprieteRepository.createpropriete = async (propriete) => {
  try {
    const { id_proprietaire, type, adresse, ville, prix, dispo, photo } = propriete;
    console.log(propriete);
    const [result] = await db.execute('INSERT INTO Propriete (id_proprietaire, type, adresse, ville, prix, dispo, photo) VALUES (?, ?, ?, ?, ?, ?, ?)', [id_proprietaire, type, adresse, ville, prix, dispo, photo]);
    console.log('New propriete created successfully');
    return result.insertId;
  } catch (err) {
    console.log('Error while creating new propriete', err);
    throw err;
  }
};



proprieteRepository.updateproprieteById = async (id, propriete) => {
  try {
    const [result] = await db.execute('UPDATE Propriete SET ? WHERE id_propriete = ?', [propriete, id]);
    if (result.affectedRows === 0) {
      console.log(`No propriete found with id ${id}`);
      return 0;
    }
    console.log(`propriete with id ${id} updated successfully`);
    return result.affectedRows;
  } catch (err) {
    console.log(`Error while updating propriete with id ${id}`, err);
    throw err;
  }
};

proprieteRepository.deleteproprieteById = async (id) => {
  try {
    const [result] = await db.execute('DELETE FROM Propriete WHERE id_propriete = ?', [id]);
    if (result.affectedRows === 0) {
      console.log(`No propriete found with id ${id}`);
      return 0;
    }
    console.log(`propriete with id ${id} deleted successfully`);
    return result.affectedRows;
  } catch (err) {
    console.log(`Error while deleting propriete with id ${id}`, err);
    throw err;
  }
};

module.exports = proprieteRepository;
