import { Article } from '@/models/Article';
import { Client } from '@/models/Client';
import { SelledArticle } from '@/models/SelledArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';


connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id,description, articleIds, name, email, phone } = req.body;
          const removedSell = await SelledArticle.findById(id);
          if (!removedSell) {
            return res.status(404).json({ error: 'SelledArticle not found.' });
          }
          const removedArticleIds = removedSell.articles;
          const removedSellPromises = removedArticleIds.map(async (articleId) => {
            await Article.findByIdAndUpdate(articleId, { selled: false });
          });
          await Promise.all(removedSellPromises);
         // Create new sell records for the provided articleIds
          const sellPromises = articleIds.map(async (articleId:string) => {
          await Article.findByIdAndUpdate(articleId, { selled: true });
          });

          // Wait for all sell promises to complete
          await Promise.all(sellPromises);

          const updatedselledArticles = await SelledArticle.findByIdAndUpdate(
            id,
            { description, articles:articleIds },
            { new: true }
          );

          const clientId = updatedselledArticles?.client;
          if (name || email || phone){
          const updatedclient = await Client.findByIdAndUpdate(
             clientId,
            { name, email, phone },
            { new: true }
            );
          }
    
          res.status(200).json({ message: 'sell updated successfully.', sell: updatedselledArticles });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the sell.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }