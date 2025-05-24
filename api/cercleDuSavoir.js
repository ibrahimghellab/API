import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const resultats = await prisma.resultatCercleDesSavoirs.findMany()
    return res.status(200).json(resultats)
  }

  if (req.method === 'POST') {
    const { pseudo, score } = req.body
    const created = await prisma.resultatCercleDesSavoirs.create({
      data: { pseudo, score: parseInt(score) },
    })
    return res.status(201).json(created)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).end(`Method ${req.method} Not Allowed`)
}
