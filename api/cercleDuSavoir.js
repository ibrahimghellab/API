const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Gérer CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const resultats = await prisma.resultatCercleDesSavoirs.findMany();
      return res.status(200).json(resultats);
    } catch (error) {
      console.error("Erreur lors du GET :", error);
      return res.status(500).json({ error: 'Erreur lors de la récupération des résultats.' });
    }
  }

  if (req.method === 'POST') {
    const { pseudo, score } = req.body;

    if (!pseudo || score == null) {
      return res.status(400).json({ error: 'Pseudo et score sont requis.' });
    }

    try {
      const nouveauResultat = await prisma.resultatCercleDesSavoirs.create({
        data: {
          pseudo,
          score: Number(score)
        }
      });
      return res.status(201).json(nouveauResultat);
    } catch (error) {
      console.error("Erreur lors du POST :", error);
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}