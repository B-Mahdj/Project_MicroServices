const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());

const rechercheController = require('./services/recherche-controller');
const rechercheRoutes = require('./services/recherche-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test endpoint to verify the microservice is working
app.get('/', (req, res) => {
  res.send('Le microservice reservation fonctionne correctement !');
});

// Mount the propriete API at /api/v1/proprietes/
app.use('/api/v1/recherche', rechercheRoutes);

// Start the server
const port = process.env.SERVICE_RECHERCHE_PORT || 3001;
app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}.`);
});



