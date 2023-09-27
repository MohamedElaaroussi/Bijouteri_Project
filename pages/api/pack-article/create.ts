import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { PackOfArticles } from '@/models/PackOfArticles';
import { Article } from '@/models/Article';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
          const { name, price,articleIds} = req.body;
          const packPromises = articleIds.map(async (articleId:String) => {
            await Article.findByIdAndUpdate(articleId, { inPack: true });
          });
    
          // Wait for all sell promises to complete
          await Promise.all(packPromises);
          // Create a new packOfArticles
          const packOfArticles = new PackOfArticles({ name, price ,articles:articleIds});
          await packOfArticles.save();
    
          res.status(201).json({ message: 'packOfArticles created successfully.', packOfArticles });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while creating the packOfArticles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }