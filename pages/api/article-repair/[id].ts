import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { RepairArticle } from '@/models/RepairArticle';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all repairArticless
        const repairArticle = await RepairArticle.findById(id).exec();
        if (!repairArticle) {
            return res.status(404).json({ error: 'repairArticle not found' });
          }
    
          return res.status(200).json(repairArticle);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching repairArticle.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }