import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { Article } from '@/models/Article';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id, title, description, price ,category} = req.body;
    
          // Update a article
          const updatedarticle = await Article.findByIdAndUpdate(
            id,
            { title, description, price ,category },
            { new: true }
          );
    
          res.status(200).json({ message: 'article updated successfully.', article: updatedarticle });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the article.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }