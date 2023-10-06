import { SelledArticle } from '../../../../../models/SelledArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { Article } from '../../../../../models/Article';
import { Client } from '../../../../../models/Client';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../../auth/[...nextauth]/routes';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getServerSession(req, res, OPTIONS);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch all sells
      const selledArticle = await SelledArticle.findById(id).populate('items.article.name', 'items.quantity', 'client.name').exec();
      if (!selledArticle) {
        return res.status(404).json({ error: 'sell not found' });
      }

      return res.status(200).json(selledArticle);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching sell.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const sell = await SelledArticle.findById(id);
      if (!sell) {
        return res.status(404).json({ error: 'SelledArticle not found.' });
      }
      const items = sell.items;
      const sellPromises = items.map(async (item: { article: string, quantity: number }) => {
        await Article.findByIdAndUpdate(item.article, { selled: false });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);

      // Delete a sell
      await SelledArticle.findByIdAndDelete(id);

      res.status(200).json({ message: 'sell deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the sell.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { description, items, name, email, phone } = req.body;
      const removedSell = await SelledArticle.findById(id);
      if (!removedSell) {
        return res.status(404).json({ error: 'SelledArticle not found.' });
      }
      const removedItems = removedSell.items;
      const removedSellPromises = removedItems.map(async (item: { article: string, quantity: number }) => {
        await Article.findByIdAndUpdate(item.article, { selled: false });
      });
      await Promise.all(removedSellPromises);
      // Create new sell records for the provided articleIds
      const sellPromises = items.map(async (item: { article: string, quantity: number }) => {
        await Article.findByIdAndUpdate(item.article, { selled: true });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);

      const updatedselledArticles = await SelledArticle.findByIdAndUpdate(
        id,
        { description, items: items },
        { new: true }
      );

      const clientId = updatedselledArticles?.client;
      if (name || email || phone) {
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
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}