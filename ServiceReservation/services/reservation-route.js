const express = require('express');
const router = express.Router();

const reservationController = require('./reservation-controller');


router.post('/CreateReservation', reservationController.createReservation);

router.put('/AnnulerRes/:id', reservationController.annulerReservationById);

router.get('/ResIdLoc/:id_locataire', reservationController.getReservationsByLocataireId);


router.put('/ModificationRes/:id', reservationController.updateReservationById);


router.get('/ResIdProp/:id_propriete', reservationController.getReservationsByProprieteId);

module.exports = router;


