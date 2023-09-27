import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Supplier } from '@/models/Supplier';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a supplier
      await Supplier.findByIdAndDelete(id);

      res.status(200).json({ message: 'supplier deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the supplier.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}