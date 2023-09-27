import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { User } from '@/models/User';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all users
        const user = await User.findById(id).exec();
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
          }
    
          return res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching user.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }