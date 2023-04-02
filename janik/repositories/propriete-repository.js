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


proprieteRepository.createpropriete = async (propriete) => {
  try {
    const { id_propriete, id_proprietaire, type, adresse, ville, prix, dispo, photo } = propriete;
    console.log(propriete);
    const [result] = await db.execute('INSERT INTO Propriete (id_propriete,id_proprietaire, type, adresse, ville, prix, dispo, photo) VALUES (?,?, ?, ?, ?, ?, ?, ?)', [id_propriete,id_proprietaire, type, adresse, ville, prix, dispo, photo]);
    console.log('New propriete created successfully');
    return result.insertId;
  } catch (err) {
    console.log('Error while creating new propriete', err);
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
