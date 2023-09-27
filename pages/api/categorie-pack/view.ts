import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfPack } from '@/models/CategoryOfPack';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch all categoryOfPacks
      const categoriesOfPacks = await CategoryOfPack.find().sort({ createdAt: -1 });

      res.status(200).json(categoriesOfPacks);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching categoriesOfPacks.' });
    }
  } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      