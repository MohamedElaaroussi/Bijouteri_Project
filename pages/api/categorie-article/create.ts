import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfArticles } from '@/models/CategoryOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
          const { name, description} = req.body;
    
          // Create a new categoryOfArticles
          const categoryOfArticles = new CategoryOfArticles({ name , description });
          await categoryOfArticles.save();
    
          res.status(201).json({ message: 'categoryOfArticles created successfully.', categoryOfArticles });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while creating the categoryOfArticles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }