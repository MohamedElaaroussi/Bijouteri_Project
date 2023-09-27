import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Supplier } from '@/models/Supplier';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all suppliers
        const supplier = await Supplier.findById(id).exec();
        if (!supplier) {
            return res.status(404).json({ error: 'supplier not found' });
          }
    
          return res.status(200).json(supplier);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching supplier.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }