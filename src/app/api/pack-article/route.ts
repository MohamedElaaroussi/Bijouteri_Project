import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { PackOfArticles } from '../../../../models/PackOfArticles';
import { Article } from '../../../../models/Article';
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
      const { name, price, articleIds } = req.body;
      if (!name || !price || !articleIds) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      const packPromises = articleIds.map(async (articleId: String) => {
        await Article.findByIdAndUpdate(articleId, { inPack: true });
      });

      // Wait for all sell promises to complete
      await Promise.all(packPromises);
      // Create a new packOfArticles
      const packOfArticles = new PackOfArticles({ name, price, articles: articleIds, user: session.user });
      await packOfArticles.save();

      res.status(201).json({ message: 'packOfArticles created successfully.', packOfArticles });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the packOfArticles.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all packOfArticles
      const packOfArticles = await PackOfArticles.find().sort({ createdAt: -1 });

      res.status(200).json(packOfArticles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching packOfArticles.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
