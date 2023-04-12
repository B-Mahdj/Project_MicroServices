const db = require('../config/database');

const reservationRepository = {};

reservationRepository.createReservation = async (reservation) => { // ok
  try {
    const { id_locataire, id_propriete, date_deb, date_fin } = reservation;
    const [result] = await db.execute('INSERT INTO location (id_location,id_locataire, id_propriete, date_deb, date_fin,annule) VALUES (5,?, ?, ?, ?,false)', [id_locataire, id_propriete, date_deb, date_fin]);
    console.log('Création de la réservation réussie');
    return result.insertId;
  } catch (err) {
    console.log('Erreur lors de la création de la réservation', err);
    throw err;
  }
};

reservationRepository.annulerReservationById = async (id) => { // ok
  try {
    const [result] = await db.execute('UPDATE location SET annule = true WHERE id_location = ?', [id]);
    if (result.affectedRows === 0) {
      console.log(`Aucune réservation trouvée avec l'identifiant ${id}`);
      return 0;
    }
    console.log(`Réservation ${id} annulée avec succès`);
    return result.affectedRows;
  } catch (err) {
    console.log(`Erreur lors de l'annulation de la réservation ${id}`, err);
    throw err;
  }
};

reservationRepository.getReservationsByLocataireId = async (id_locataire) => { // OK
  try {
    const [rows] = await db.execute('SELECT * FROM location  WHERE id_locataire = ?', [id_locataire]);
    if (rows.length === 0) {
      console.log(`Aucune réservation trouvée pour le locataire avec l'identifiant ${id_locataire}`);
      return null;
    }
    console.log(`Réservations pour le locataire ${id_locataire} récupérées avec succès`);
    return rows;
  } catch (err) {
    console.log(`Erreur lors de la récupérationdd des réservations pour le locataire ${id_locataire}`, err);
    throw err;
  }
};

reservationRepository.updateReservationById = async (id, reservation) => { // PB de date il update avec un jour en moins !!! 
  try {
    let columnsToUpdate = '';
    const columnValues = [];
    for (const [key, value] of Object.entries(reservation)) {
      if (value !== undefined && key !== 'id_location') {
        if (key === 'date_deb' || key === 'date_fin') { // Vérifier si c'est une date
          columnsToUpdate += `${key}=STR_TO_DATE(?, '%Y-%m-%d'),`; // Utiliser STR_TO_DATE pour convertir en DATE
        } else {
          columnsToUpdate += `${key}=?,`;
        }
        columnValues.push(value);
      }
    }

    columnsToUpdate = columnsToUpdate.slice(0, -1); // Enlever la dernière virgule
    columnValues.push(id);
    const [result] = await db.execute(`UPDATE location SET ${columnsToUpdate} WHERE id_location = ?`, columnValues);
    if (result.affectedRows === 0) {
      console.log(`Aucune réservation trouvée avec l'identifiant ${id}`);
      return 0;
    }
    console.log(`Réservation ${id} mise à jour avec succès`);
    return result.affectedRows;
  } catch (err) {
    console.log(`Erreur lors de la mise à jour de la réservation ${id}`, err);
    throw err;
  }
};


reservationRepository.getReservationsByProprieteId = async (id_propriete) => {
  try {
    const [rows] = await db.execute('SELECT * FROM location WHERE id_propriete = ?', [id_propriete]);
    if (rows.length === 0) {
      console.log(`Aucune réservation trouvée pour la propriété avec l'identifiant ${id_propriete}`);
      return null;
    }
    console.log(`Réservations pour la propriété ${id_propriete} récupérées avec succès`);
    return rows;
  } catch (err) {
    console.log(`Erreur lors de la récupération des réservations pour la propriété ${id_propriete}`, err);
    throw err;
  }
};



module.exports = reservationRepository;
