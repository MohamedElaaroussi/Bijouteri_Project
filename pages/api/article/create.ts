import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Article } from '@/models/Article';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
          const { title, description, price ,category} = req.body;
    
          // Create a new article
          const article = new Article({ title, description, price ,category});
          await article.save();
    
          res.status(201).json({ message: 'article created successfully.', article });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while creating the article.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }