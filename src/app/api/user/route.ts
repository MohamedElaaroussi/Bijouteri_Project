import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { User } from '../../../../models/User';
import { getServerSession } from 'next-auth/next';
import bcrypt from 'bcryptjs'
import { OPTIONS } from '../auth/[...nextauth]/route';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, OPTIONS);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'POST') {
    try {
      const { username, email, phone, password, roleId } = req.body;
      if (!username || !email || !phone || !password || !roleId) {
        return res.status(400).json({ error: 'Missing or invalid sell input data.' });
      }
      const hashPassword = await bcrypt.hash(password, String(process.env.SECRET));
      // Create a new user
      const user = new User({ username, email, phone, hashPassword, role: roleId });
      await user.save();

      res.status(201).json({ message: 'user created successfully.', user });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all users
      const users = await User.find().sort({ createdAt: -1 });

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
