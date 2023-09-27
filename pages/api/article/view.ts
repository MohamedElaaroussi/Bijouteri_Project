import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Article } from '@/models/Article';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all articles
          const articles = await Article.find().sort({ createdAt: -1 });
    
          res.status(200).json(articles);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching articles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      