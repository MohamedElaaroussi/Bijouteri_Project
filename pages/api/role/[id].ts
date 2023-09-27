import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Role } from '@/models/Role';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        // Fetch all roles
        const role = await Role.findById(id).populate('permissions').exec();
        if (!role) {
            return res.status(404).json({ error: 'role not found' });
          }
    
          return res.status(200).json(role);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching role.' });
      }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }