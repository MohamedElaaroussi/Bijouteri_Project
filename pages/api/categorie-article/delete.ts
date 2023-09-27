import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfArticles } from '@/models/CategoryOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a categoryOfArticle
      await CategoryOfArticles.findByIdAndDelete(id);

      res.status(200).json({ message: 'categoryOfArticle deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the categoryOfArticle.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}