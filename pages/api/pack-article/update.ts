import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { PackOfArticles } from '@/models/PackOfArticles';
import { Article } from '@/models/Article';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id,name, price,articleIds} = req.body; 
          const removedPack = await PackOfArticles.findById(id);
          if (!removedPack) {
            return res.status(404).json({ error: 'PackedArticle not found.' });
          }
          const removedArticleIds = removedPack.articles;
          const removedPackPromises = removedArticleIds.map(async(articleId) => {
            await Article.findByIdAndUpdate(articleId, { Packed: false });
          });
          await Promise.all(removedPackPromises);
         // Create new Pack records for the provided articleIds
          const PackPromises = articleIds.map(async (articleId:string) => {
          await Article.findByIdAndUpdate(articleId, { Packed: true });
          });

          // Wait for all Pack promises to complete
          await Promise.all(PackPromises);
    
          // Update a packOfArticles
          const updatedpackOfArticles = await PackOfArticles.findByIdAndUpdate(
            id,
            { name, price ,articles:articleIds },
            { new: true }
          );
    
          res.status(200).json({ message: 'packOfArticles updated successfully.', packOfArticles: updatedpackOfArticles });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the packOfArticles.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }


    