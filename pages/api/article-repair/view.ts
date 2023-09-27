import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { RepairArticle } from '@/models/RepairArticle';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all repairsArticles
          const repairsArticles = await RepairArticle.find().sort({ createdAt: -1 });
    
          res.status(200).json(repairsArticles);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching repairsArticles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      