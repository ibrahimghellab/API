const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// GET : récupérer tous les scores Route de la Soie
router.get('/', async (req, res) => {
  try {
    const resultats = await prisma.resultatRouteDeLaSoie.findMany({
      orderBy: {
        score: 'desc',
      },
      take: 100, // limite les résultats
    });
    res.status(200).json(resultats);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des scores.' });
  }
});

// POST : enregistrer un nouveau score
router.post('/', async (req, res) => {
  console.log("POST /routeDeLaSoie reçu :", req.body); // LOG !
  const { pseudo, score } = req.body;

  if (!pseudo || score == null) {
    console.log("Requête invalide"); // LOG !
    return res.status(400).json({ error: 'Pseudo et score sont requis.' });
  }

  try {
    const nouveauScore = await prisma.resultatRouteDeLaSoie.create({
      data: { pseudo, score: Number(score) },
    });
    console.log("Score enregistré :", nouveauScore); // LOG !
    res.status(201).json(nouveauScore);
  } catch (error) {
    console.error("Erreur lors du POST :", error); // LOG !
    res.status(500).json({ error: 'Erreur lors de la création du score.' });
  }
});

module.exports = router;
