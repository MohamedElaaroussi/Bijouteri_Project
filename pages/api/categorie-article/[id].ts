import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfArticles } from '@/models/CategoryOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all categoryOfArticless
        const categoryOfArticles = await CategoryOfArticles.findById(id).exec();
        if (!categoryOfArticles) {
            return res.status(404).json({ error: 'categoryOfArticles not found' });
          }
    
          return res.status(200).json(categoryOfArticles);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching categoryOfArticles.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }