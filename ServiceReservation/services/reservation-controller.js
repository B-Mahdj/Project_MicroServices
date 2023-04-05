const reservationService = require('./reservation-service');

const reservationController = {};

// Controller function to create a new reservation
reservationController.createReservation = async (req, res) => {
  const reservation = req.body;
  console.log(req.body);
  try {
    await reservationService.createReservation(reservation);
    res.send({ message: 'La réservation a été créée avec succès.' });
  } catch (error) {
  
    res.status(500).send({ message: 'Une erreur est survenue lors de la création de la réservation.' });
  }
};

// Controller function to cancel a reservation by ID
reservationController.annulerReservationById = async (req, res) => {
  const id = req.params.id;
  try {
    const rowsAffected = await reservationService.annulerReservationById(id);
    if (rowsAffected === 0) {
      res.status(404).send({ message: `Aucune réservation trouvée avec l'identifiant ${id}.` });
    } else {
      res.send({ message: `Réservation ${id} annulée avec succès.` });
    }
  } catch (error) {
    res.status(500).send({ message: `Une erreur est survenue lors de l'annulation de la réservation ${id}.` });
  }
};

// Controller function to get reservations by locataire ID
reservationController.getReservationsByLocataireId = async (req, res) => {
  const id_locataire = req.params.id_locataire;
  try {
    const reservations = await reservationService.getReservationsByLocataireId(id_locataire);
    if (reservations === null) {
      res.status(404).send({ message: `Aucune réservation trouvée pour le locataire avec l'identifiant ${id_locataire}.` });
    } else {
      res.send(reservations);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: `Une erreur est survenue lors de la récupération des réservations pour le locataire ${id_locataire}.` });
  }
};

// Controller function to update a reservation by ID
reservationController.updateReservationById = async (req, res) => {
  const id = req.params.id;
  const reservation = req.body;
  try {
    const rowsAffected = await reservationService.updateReservationById(id, reservation);
    if (rowsAffected === 0) {
      res.status(404).send({ message: `Aucune réservation trouvée avec l'identifiant ${id}.` });
    } else {
      res.send({ message: `Réservation ${id} mise à jour avec succès.` });
    }
  } catch (error) {
    res.status(500).send({ message: `Une erreur est survenue lors de la mise à jour de la réservation ${id}.` });
  }
};

// Controller function to get reservations by propriete ID
reservationController.getReservationsByProprieteId = async (req, res) => {
  const id_propriete = req.params.id_propriete;
  try {
    const reservations = await reservationService.getReservationsByProprieteId(id_propriete);
    if (reservations === null) {
      res.status(404).send({ message: `Aucune réservation trouvée pour la propriété avec l'identifiant ${id_propriete}.` });
    } else {
      res.send(reservations);
    }
  } catch (error) {
    res.status(500).send({ message: `Une erreur est survenue lors de la récupération des réservations pour la propriété ${id_propriete}.` });
    }
};

module.exports = reservationController;