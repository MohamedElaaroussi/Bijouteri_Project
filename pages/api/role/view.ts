import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Role } from '@/models/Role';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
          // Fetch all roles
          const roles = await Role.find().sort({ createdAt: -1 });
    
          res.status(200).json(roles);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching roles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      