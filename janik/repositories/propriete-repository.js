const db = require('../config/database');

const proprieteRepository = {};

proprieteRepository.getAllProperties = async () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Propriete', (err, res) => {
      if (err) {
        console.log('Error while fetching properties', err);
        reject(err);
      } else {
        console.log('Properties fetched successfully');
        resolve(res);
      }
    });
  });
};

proprieteRepository.getproprieteById = async (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM Propriete WHERE id_propriete = ${id}`, (err, res) => {
      if (err) {
        console.log(`Error while fetching propriete with id ${id}`, err);
        reject(err);
      } else {
        console.log(`propriete with id ${id} fetched successfully`);
        resolve(res[0]);
      }
    });
  });
};

proprieteRepository.createpropriete = async (propriete) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO Propriete SET ?', propriete, (err, res) => {
      if (err) {
        console.log('Error while creating new propriete', err);
        reject(err);
      } else {
        console.log('New propriete created successfully');
        resolve(res.insertId);
      }
    });
  });
};

proprieteRepository.updateproprieteById = async (id, propriete) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE Propriete SET ? WHERE id_propriete = ?', [propriete, id], (err, res) => {
      if (err) {
        console.log(`Error while updating propriete with id ${id}`, err);
        reject(err);
      } else {
        console.log(`propriete with id ${id} updated successfully`);
        resolve(res.affectedRows);
      }
    });
  });
};

proprieteRepository.deleteproprieteById = async (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM Propriete WHERE id_propriete = ?', id, (err, res) => {
      if (err) {
        console.log(`Error while deleting propriete with id ${id}`, err);
        reject(err);
      } else {
        console.log(`propriete with id ${id} deleted successfully`);
        resolve(res.affectedRows);
      }
    });
  });
};

module.exports = proprieteRepository;
