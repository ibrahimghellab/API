export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'API host sur Vercel opérationnelle 🚀',
      endpoints: [
        'GET/POST /api/routeDeLaSoie',
        'GET/POST /api/imprimerie', 
        'GET/POST /api/cercleDuSavoir'
      ]
    });
  }
  
  res.status(405).json({ error: 'Method not allowed' });
}