const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    id_location: {
    type: Number,
    required: true,
    unique: true
    },
    id_locataire: {
    type: Number,
    required: true,
    },
    id_propriete: {
    type: Number,
    required: true,
    },
    date_deb: {
    type: Date,
    required: true
    },
    date_fin: {
    type: Date,
    required: true
    },
    annule: {
    type: Boolean,
    required: true,
    default: false
    }
});

module.exports = mongoose.model('Location', ReservationSchema);