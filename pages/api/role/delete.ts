import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Role } from '@/models/Role';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a role
      await Role.findByIdAndDelete(id);

      res.status(200).json({ message: 'role deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the role.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}