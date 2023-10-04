import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { PackOfArticles } from '../../../../../models/PackOfArticles';
import { Article } from '../../../../../models/Article';
import { getServerSession } from 'next-auth/next';
import { options } from '../../auth/[...nextauth]/routes';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getServerSession(req,res,options);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch all packOfArticless
      const packOfArticles = await PackOfArticles.findById(id).populate('articles.name').exec();
      if (!packOfArticles) {
        return res.status(404).json({ error: 'packOfArticles not found' });
      }

      return res.status(200).json(packOfArticles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching packOfArticles.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Await the retrieval of articleIds
      const pack = await PackOfArticles.findById(id);
      if (!pack) {
        return res.status(404).json({ error: 'PackOfArticles not found.' });
      }
      const articleIds = pack.articles;

      const packPromises = articleIds.map(async (articleId: string) => {
        await Article.findByIdAndUpdate(articleId, { inPack: false });
      });

      // Wait for all update promises to complete
      await Promise.all(packPromises);

      // Delete the packOfArticles
      await PackOfArticles.findByIdAndDelete(id);

      res.status(200).json({ message: 'PackOfArticles deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the packOfArticles.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { name, price, articleIds } = req.body;
      const removedPack = await PackOfArticles.findById(id);
      if (!removedPack) {
        return res.status(404).json({ error: 'PackedArticle not found.' });
      }
      const removedArticleIds = removedPack.articles;
      const removedPackPromises = removedArticleIds.map(async (articleId: string) => {
        await Article.findByIdAndUpdate(articleId, { inPack: false });
      });
      await Promise.all(removedPackPromises);
      // Create new Pack records for the provided articleIds
      const PackPromises = articleIds.map(async (articleId: string) => {
        await Article.findByIdAndUpdate(articleId, { inPack: true });
      });

      // Wait for all Pack promises to complete
      await Promise.all(PackPromises);

      // Update a packOfArticles
      const updatedpackOfArticles = await PackOfArticles.findByIdAndUpdate(
        id,
        { name, price, articles: articleIds },
        { new: true }
      );

      res.status(200).json({ message: 'packOfArticles updated successfully.', packOfArticles: updatedpackOfArticles });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the packOfArticles.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}


