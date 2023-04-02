const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const proprieteController = require('./services/propriete-controller');
const proprieteRoutes = require('./services/propriete-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test endpoint to verify the microservice is working
app.get('/', (req, res) => {
  res.send('Le microservice propriete fonctionne correctement !');
});

// Mount the propriete API at /api/v1/proprietes/
app.use('/api/v1/properties', proprieteRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}.`);
});



