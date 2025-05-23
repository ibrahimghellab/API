const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// GET tous les résultats
router.get('/', async (req, res) => {
    res.json(await prisma.resultatRouteDeLaSoie.findMany());
});


// POST ajouter un résultat
router.post('/', (req, res) => {
    const { pseudo, score } = req.body;
    prisma.resultatRouteDeLaSoie.create({
        data: {
            pseudo, 
            score 
        }
    })
    .then(nouveauResultat => res.status(201).json(nouveauResultat))
    .catch(error => res.status(500).json({ error: error.message }));
    
});



module.exports = router;