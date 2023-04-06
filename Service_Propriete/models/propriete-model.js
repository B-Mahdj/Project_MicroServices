const mongoose = require('mongoose');

const ProprieteSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  codePostal: {
    type: String,
    required: true
  },
  pays: {
    type: String,
    required: true
  },
  dateCreation: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Propriete', ProprieteSchema);
