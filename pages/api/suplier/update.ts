import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Supplier } from '@/models/Supplier';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id, name,email,phone} = req.body;
    
          // Update a supplier
          const updatedsupplier = await Supplier.findByIdAndUpdate(
            id,
            { name,email,phone},
            { new: true }
          );
    
          res.status(200).json({ message: 'supplier updated successfully.', supplier: updatedsupplier });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the supplier.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }