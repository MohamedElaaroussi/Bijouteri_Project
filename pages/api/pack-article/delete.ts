import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { PackOfArticles } from '@/models/PackOfArticles';
import { Article } from '@/models/Article';

connectToDatabase();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      
      // Await the retrieval of articleIds
      const pack = await PackOfArticles.findById(id);
      if (!pack) {
        return res.status(404).json({ error: 'PackOfArticles not found.' });
      }
      const articleIds = pack.articles;

      const packPromises = articleIds.map(async (articleId) => {
        await Article.findByIdAndUpdate(articleId, { selled: false });
      });

      // Wait for all update promises to complete
      await Promise.all(packPromises);

      // Delete the packOfArticles
      await PackOfArticles.findByIdAndDelete(id);

      res.status(200).json({ message: 'PackOfArticles deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the packOfArticles.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}