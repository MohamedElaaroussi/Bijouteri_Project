import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { CategoryOfArticles } from '@/models/CategoryOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id, name, description} = req.body;
    
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
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }