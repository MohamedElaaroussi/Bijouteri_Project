import { SelledArticle } from '@/models/SelledArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all sells
        const selledArticle = await SelledArticle.findById(id).exec();
        if (!selledArticle) {
            return res.status(404).json({ error: 'sell not found' });
          }
    
          return res.status(200).json(selledArticle);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching sell.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }