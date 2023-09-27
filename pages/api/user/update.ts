import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { User } from '@/models/User';
import { Permission } from '@/models/Menu';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id, username, email, phone , password, roleId} = req.body;
    
          // Update a user
          const updateduser = await User.findByIdAndUpdate(
            id,
            { username, email, phone , password, role :roleId },
            { new: true }
          );
    
          res.status(200).json({ message: 'user updated successfully.', user: updateduser });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the user.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }