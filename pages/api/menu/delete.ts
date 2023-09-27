import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';

import { Role } from '@/models/Role';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'PATCH') {
    try {
      const { roleId,permissionId } = req.body;
    
      // Create a new permission
      const role = await Role.findByIdAndUpdate(
        roleId,
      {$pull: { permissions:permissionId }},
      {new : true},
      );

      res.status(200).json({ message: 'permission deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the permission.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}