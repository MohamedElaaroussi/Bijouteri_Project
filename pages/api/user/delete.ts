import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { User } from '@/models/User';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a user
      await User.findByIdAndDelete(id);

      res.status(200).json({ message: 'user deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}