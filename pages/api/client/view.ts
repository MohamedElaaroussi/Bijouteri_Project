import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Client } from '@/models/Client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all clients
          const clients = await Client.find().sort({ createdAt: -1 });
    
          res.status(200).json(clients);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching clients.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      