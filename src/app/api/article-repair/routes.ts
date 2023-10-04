import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { RepairArticle } from '../../../../models/RepairArticle';
import { Client } from '../../../../models/Client';
import { getSession } from 'next-auth/client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'POST') {
    try {
      const { title, description, userId, name, email, phone } = req.body;
      if (!name || !description || !name || !email) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      let clientId = req.body.clientId;
      if (!clientId) {
        const client = new Client({ name, email, phone ,user: session.user._id });
        await client.save();
        clientId = client._id;
      }

      // Create a new repairArticle
      const repairArticle = new RepairArticle({ title, description, user: userId, client: clientId });
      await repairArticle.save();

      res.status(201).json({ message: 'repairArticle created successfully.', repairArticle });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the repairArticle.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all repairsArticles
      const repairsArticles = await RepairArticle.find().sort({ createdAt: -1 });

      res.status(200).json(repairsArticles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching repairsArticles.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}