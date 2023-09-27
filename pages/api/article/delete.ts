import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Article } from '@/models/Article';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a article
      await Article.findByIdAndDelete(id);

      res.status(200).json({ message: 'article deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the article.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}