import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { User } from '@/models/User';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all users
          const users = await User.find().sort({ createdAt: -1 });
    
          res.status(200).json(users);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching users.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      