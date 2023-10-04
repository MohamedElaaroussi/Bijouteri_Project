import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { CategoryOfArticles } from '../../../../models/CategoryOfArticles';
import { getServerSession } from 'next-auth/next';
import { options } from '../auth/[...nextauth]/routes';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req,res,options);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'POST') {
    try {
      const { name, description } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      // Create a new categoryOfArticles
      const categoryOfArticles = new CategoryOfArticles({ name, description, user: session.user  });
      await categoryOfArticles.save();

      res.status(201).json({ message: 'categoryOfArticles created successfully.', categoryOfArticles });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the categoryOfArticles.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all categoryOfArticles
      const categoriesOfArticles = await CategoryOfArticles.find().sort({ createdAt: -1 });

      res.status(200).json(categoriesOfArticles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching categoriesOfArticles.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}