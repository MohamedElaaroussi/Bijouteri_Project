import { Article } from '@/models/Article';
import { Client } from '@/models/Client';
import { SelledArticle } from '@/models/SelledArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { description, articleIds, clientId, name, email, phone} = req.body;
      // Create new sell records for the provided articleIds
      const sellPromises = articleIds.map(async (articleId:String) => {
        await Article.findByIdAndUpdate(articleId, { selled: true });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);
      if (!clientId) {
        const client = new Client({ name, email, phone });
        await client.save();
        clientId = client._id;
      }

      const selledArticle = new SelledArticle({ description, articles: articleIds, client: clientId });
      await selledArticle.save();

      res.status(201).json({ message: 'sell created successfully.', selledArticle });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the sell.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}