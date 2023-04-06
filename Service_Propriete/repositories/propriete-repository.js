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
      console.log(`Aucune propriete trouve au numero ${id}`);
      return null;
    }
    console.log(`Propriete ${id} recuperé avec succès`);
    return rows[0];
  } catch (err) {
    console.log(`Erreur lors de la recuperation de la propriete ${id}`, err);
    throw err;
  }
};


proprieteRepository.createpropriete = async (propriete) => {
  try {
    const { id_propriete, id_proprietaire, type, adresse, ville, prix, dispo, photo } = propriete;
    console.log(propriete);
    const [result] = await db.execute('INSERT INTO Propriete (id_propriete,id_proprietaire, type, adresse, ville, prix, dispo, photo) VALUES (?,?, ?, ?, ?, ?, ?, ?)', [id_propriete,id_proprietaire, type, adresse, ville, prix, dispo, photo]);
    console.log('Creation de la propriete reussie');
    return result.insertId;
  } catch (err) {
    console.log('Erreur lors de la creation de la propriete', err);
    throw err;
  }
};

proprieteRepository.updateproprieteById = async (id, propriete) => {
  try {
    let columnsToUpdate = '';
    const columnValues = [];
    for (const [key, value] of Object.entries(propriete)) {
      if (value !== undefined && key !== 'id_propriete') {
        columnsToUpdate += `${key}=?,`;
        columnValues.push(value);
      }
    }
    columnsToUpdate = columnsToUpdate.slice(0, -1); // Enlever la dernière virgule
    columnValues.push(id);
    const [result] = await db.execute(`UPDATE Propriete SET ${columnsToUpdate} WHERE id_propriete = ?`, columnValues);
    if (result.affectedRows === 0) {
      console.log(`Aucune propriete trouve au numero ${id}`);
      return 0;
    }
    console.log(`Propriete ${id} mise à jour avec succès`);
    return result.affectedRows;
  } catch (err) {
    console.log(`Erreur lors de la mise a jour de la propriete ${id}`, err);
    throw err;
  }
};

proprieteRepository.deleteproprieteById = async (id) => {
  try {
    const [result] = await db.execute('DELETE FROM Propriete WHERE id_propriete = ?', [id]);
    if (result.affectedRows === 0) {
      console.log(`Aucune propriete trouve au numero ${id}`);
      return 0;
    }
    console.log(`propriete ${id} supprime avec succes`);
    return result.affectedRows;
  } catch (err) {
    console.log(`Erreur lors de la recuperation de la propriete ${id}`, err);
    throw err;
  }
};

proprieteRepository.updateDispoById = async (id, isDispo) => {
  try {
    const [result] = await db.execute('UPDATE Propriete SET dispo = ? WHERE id_propriete = ?', [isDispo, id]);
    if (result.affectedRows === 0) {
      console.log(`Aucune propriete trouve au numero ${id}`);
      return 0;
    }
    console.log(`propriete ${id} change à ${isDispo} avec succes`);
    return result.affectedRows;
  } catch (err) {
    console.log(`Erreur pendant l'update ${id}`, err);
    throw err;
  }
};

module.exports = proprieteRepository;
