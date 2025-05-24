const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Importer les routes
const imprimerieRoute = require('../routes/controllerResultImprimerie');
const routeDeLaSoieRoute = require('../routes/controllerResultRouteDeLaSoie');
const cercleDesSavoirsRoute = require('../routes/controllerResultatCercleDesSavoirs'); 

app.use('/imprimerie', imprimerieRoute);
app.use('/routeDeLaSoie', routeDeLaSoieRoute);
app.use('/cercleDuSavoir', cercleDesSavoirsRoute);

// Route de test
app.get('/', (req, res) => {
  res.send('API host sur Vercel API opérationnelle 🚀');
});

// Export Express app en tant que Serverless handler pour Vercel
const server = require('http').createServer(app);
module.exports = (req, res) => {
  server.emit('request', req, res);
};
