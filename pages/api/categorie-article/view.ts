import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfArticles } from '@/models/CategoryOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all categoryOfArticles
          const categoriesOfArticles = await CategoryOfArticles.find().sort({ createdAt: -1 });
    
          res.status(200).json(categoriesOfArticles);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching categoriesOfArticles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      