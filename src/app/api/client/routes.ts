import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { Client } from '../../../../models/Client';
import { getServerSession } from 'next-auth/next';
import { options } from '../auth/[...nextauth]/routes';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req,res,options);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'POST') {
    try {
      const { name, email, phone} = req.body;
      if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      // Create a new client
      const client = new Client({ name, email, phone, user: session.user  });
      await client.save();

      res.status(201).json({ message: 'client created successfully.', client });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the client.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all clients
      const clients = await Client.find().sort({ createdAt: -1 });

      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching clients.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
