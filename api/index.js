const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
require('dotenv').config()

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())


// Importer les routes
const imprimerieRoute = require('../routes/controllerResultImprimerie')
const routeDeLaSoieRoute = require('../routes/controllerResultRouteDeLaSoie')
const cercleDesSavoirsRoute= require('../routes/controllerResultRouteDeLaSoie')

app.use('/imprimerie', imprimerieRoute)
app.use('/routeDeLaSoie', routeDeLaSoieRoute)
app.use('/cercleDuSavoir', cercleDesSavoirsRoute)




app.get('/', (req, res) => {
  res.send('API host sur Vercel API opérationnelle 🚀')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`)
})
