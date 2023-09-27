import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { RepairArticle } from '@/models/RepairArticle';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete a repairArticleawait 
      RepairArticle.findByIdAndDelete(id);

      res.status(200).json({ message: 'repairArticle deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the repairArticle.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}