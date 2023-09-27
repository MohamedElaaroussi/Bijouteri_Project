import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfPack } from '@/models/CategoryOfPack';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a categoryOfPack
      await CategoryOfPack.findByIdAndDelete(id);

      res.status(200).json({ message: 'categoryOfPack deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the categoryOfPack.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}