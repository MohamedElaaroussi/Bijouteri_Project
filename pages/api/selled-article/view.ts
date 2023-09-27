import { SelledArticle } from '@/models/SelledArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';


connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all sells
          const selledArticles = await SelledArticle.find().sort({ createdAt: -1 });
    
          res.status(200).json(selledArticles);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching sells.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      