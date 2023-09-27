import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Client } from '@/models/Client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id, name, email, phone} = req.body;
    
          // Update a client
          const updatedclient = await Client.findByIdAndUpdate(
            id,
            { name, email, phone },
            { new: true }
          );
    
          res.status(200).json({ message: 'client updated successfully.', client: updatedclient });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the client.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }