import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Article } from '@/models/Article';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all articles
        const article = await Article.findById(id).populate('category','name').exec();
        if (!article) {
            return res.status(404).json({ error: 'article not found' });
          }
    
          return res.status(200).json(article);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching article.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }