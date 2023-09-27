import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { PackOfArticles } from '@/models/PackOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all packOfArticles
          const packOfArticles = await PackOfArticles.find().sort({ createdAt: -1 });
    
          res.status(200).json(packOfArticles);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching packOfArticles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      