import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfPack } from '@/models/CategoryOfPack';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all categoryOfPacks
        const categoryOfPack = await CategoryOfPack.findById(id).exec();
        if (!categoryOfPack) {
            return res.status(404).json({ error: 'categoryOfPack not found' });
          }
    
          return res.status(200).json(categoryOfPack);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching categoryOfPack.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }