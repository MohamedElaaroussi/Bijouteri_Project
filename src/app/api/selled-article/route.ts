import { Article } from '../../../../models/Article';
import { Client } from '../../../../models/Client';
import { SelledArticle } from '../../../../models/SelledArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../auth/[...nextauth]/route';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, OPTIONS);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'POST') {
    try {
      const { description, items, name, email, phone } = req.body;
      let clientId = req.body.clientId;
      if (!description || !items) {
        return res.status(400).json({ error: 'Missing or invalid sell input data.' });
      }

      const sellPromises = items.map(async (item: { article: string, quantity: number }) => {
        await Article.findByIdAndUpdate(item.article, { selled: true });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);
      if (!clientId) {
        if (!name || !email || !phone) {
          return res.status(400).json({ error: 'Missing or invalid client input data.' });
        }
        const client = new Client({ name, email, phone, user: session.user });
        await client.save();
        clientId = client;

      }

      const selledArticle = new SelledArticle({ description, items: items, client: clientId, user: session.user });
      await selledArticle.save();

      res.status(201).json({ message: 'sell created successfully.', selledArticle });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the sell.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all sells
      const selledArticles = await SelledArticle.find().sort({ createdAt: -1 });

      res.status(200).json(selledArticles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching sells.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
