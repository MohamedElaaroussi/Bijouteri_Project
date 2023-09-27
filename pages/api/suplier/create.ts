import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Supplier } from '@/models/Supplier';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
          const { name,email,phone} = req.body;
    
          // Create a new supplier
          const supplier = new Supplier({ name,email,phone });
          await supplier.save();
    
          res.status(201).json({ message: 'supplier created successfully.', supplier });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while creating the supplier.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }