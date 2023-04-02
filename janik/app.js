const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const propertyController = require('./services/propriete-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the property API at /api/v1/properties
app.use('/api/v1/properties', propertyController);

// Test endpoint to verify the microservice is working
app.get('/', (req, res) => {
  res.send('Le microservice propriete fonctionne correctement !');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}.`);
});
