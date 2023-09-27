import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Supplier } from '@/models/Supplier';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all suppliers
          const suppliers = await Supplier.find().sort({ createdAt: -1 });
    
          res.status(200).json(suppliers);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching suppliers.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      