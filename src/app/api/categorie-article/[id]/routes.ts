import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { CategoryOfArticles } from '../../../../../models/CategoryOfArticles';
import { Article } from '../../../../../models/Article';
import { getSession } from 'next-auth/client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getSession({ req });

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch all categoryOfArticless
      const categoryOfArticles = await CategoryOfArticles.findById(id).exec();
      const articles = await Article.find({ category: id }).populate('category');
      if (!categoryOfArticles) {
        return res.status(404).json({ error: 'categoryOfArticles not found' });
      }

      return res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching categoryOfArticles.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Delete a categoryOfArticle
      await CategoryOfArticles.findByIdAndDelete(id);

      res.status(200).json({ message: 'categoryOfArticle deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the categoryOfArticle.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { name, description } = req.body;

      // Update a categoryOfArticles
      const updatedcategoryOfArticles = await CategoryOfArticles.findByIdAndUpdate(
        id,
        { name, description },
        { new: true }
      );

      res.status(200).json({ message: 'categoryOfArticles updated successfully.', categoryOfArticles: updatedcategoryOfArticles });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the categoryOfArticles.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}