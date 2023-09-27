import { Article } from '@/models/Article';
import { SelledArticle } from '@/models/SelledArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      const sell = await SelledArticle.findById(id);
      if (!sell) {
        return res.status(404).json({ error: 'SelledArticle not found.' });
      }
      const articleIds = sell.articles;
      const sellPromises = articleIds.map(async (articleId) => {
        await Article.findByIdAndUpdate(articleId, { selled: false });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);

      // Delete a sell
      await SelledArticle.findByIdAndDelete(id);

      res.status(200).json({ message: 'sell deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the sell.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}