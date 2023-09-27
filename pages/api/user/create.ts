import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { User } from '@/models/User';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
          const { username, email, phone , password, roleId} = req.body;
    
          // Create a new user
          const user = new User({ username, email, phone , password, role:roleId });
          await user.save();
    
          res.status(201).json({ message: 'user created successfully.', user });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while creating the user.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }