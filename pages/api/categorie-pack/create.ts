import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfPack } from '@/models/CategoryOfPack';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, description } = req.body;

      // Create a new categoryOfPack
      const categoryOfPack = new CategoryOfPack({ name, description });
      await categoryOfPack.save();

      res.status(201).json({ message: 'categoryOfPack created successfully.', categoryOfPack });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the categoryOfPack.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}