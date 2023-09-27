import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Client } from '@/models/Client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
          const { name, email, phone} = req.body;
    
          // Create a new client
          const client = new Client({ name, email, phone });
          await client.save();
    
          res.status(201).json({ message: 'client created successfully.', client });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while creating the client.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }