const reservationRepository = require('../repositories/reservation-repository');

const reservationService = {};



reservationService.createReservation = async (reservation) => {
  return await reservationRepository.createReservation(reservation);
};

reservationService.getReservationsByLocataireId = async (id_locataire) => {
  return await reservationRepository.getReservationsByLocataireId(id_locataire);
};

reservationService.annulerReservationById = async (id) => {
  return await reservationRepository.annulerReservationById(id);
};

reservationService.updateReservationById = async (id, reservation) => {
  try {
    const rowsAffected = await reservationRepository.updateReservationById(id, reservation);
    return rowsAffected;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

reservationService.getReservationsByProprieteId = async (id_propriete) => {
    return await reservationRepository.getReservationsByProprieteId(id_propriete);
  };


module.exports = reservationService;
