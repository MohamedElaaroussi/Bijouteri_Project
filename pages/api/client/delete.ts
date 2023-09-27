import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Client } from '@/models/Client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a client
      await Client.findByIdAndDelete(id);

      res.status(200).json({ message: 'client deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the client.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}