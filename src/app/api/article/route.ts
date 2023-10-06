import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
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
      const { title, description, price, categoryId } = req.body;
      if (!title || !description || !price || !categoryId) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      // Create a new article
      const article = new Article({ title, description, price, category: categoryId, user: session.user })
      await article.save();

      res.status(201).json({ message: 'article created successfully.', article });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the article.' });
    }
  }
  else if (req.method === 'GET') {
    try {
      // Fetch all articles
      const articles = await Article.find().sort({ createdAt: -1 });

      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching articles.' });
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}