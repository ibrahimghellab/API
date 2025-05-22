export default function handler(req, res) {
  // Autoriser uniquement les requêtes GET
  if (req.method === 'GET') {
    // Exemple de réponse JSON
    res.status(200).json({
      message: 'Bienvenue sur mon API Node.js déployée sur Vercel !',
      time: new Date().toISOString()
    });
  } else {
    // Méthode non autorisée
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
  }
}