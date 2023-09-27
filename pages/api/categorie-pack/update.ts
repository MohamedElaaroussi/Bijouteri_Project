import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfPack } from '@/models/CategoryOfPack';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    try {
      const { id, name, description } = req.body;

      // Update a categoryOfPack
      const updatedcategoryOfPack = await CategoryOfPack.findByIdAndUpdate(
        id,
        { name, description },
        { new: true }
      );

      res.status(200).json({ message: 'categoryOfPack updated successfully.', categoryOfPack: updatedcategoryOfPack });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the categoryOfPack.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}