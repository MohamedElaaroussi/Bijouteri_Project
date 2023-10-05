import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { SelledPack } from '../../../../../models/SelledPack';
import { PackOfArticles } from '../../../../../models/PackOfArticles';
import { Client } from '../../../../../models/Client';
import { getServerSession } from 'next-auth/next';
import { options } from '../../auth/[...nextauth]/route';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getServerSession(req,res,options);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      // Fetch all sells
      const selledPack = await SelledPack.findById(id).populate('items.article', 'name').populate('client', 'name');
      if (!selledPack) {
        return res.status(404).json({ error: 'sell not found' });
      }

      return res.status(200).json(selledPack);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching sell.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      const sell = await SelledPack.findById(id);
      if (!sell) {
        return res.status(404).json({ error: 'SelledPack not found.' });
      }
      const items = sell.items;
      const sellPromises = items.map(async (item: { pack: string, quantity: number }) => {
        await PackOfArticles.findByIdAndUpdate(item.pack, { selled: false });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);

      // Delete a sell
      await SelledPack.findByIdAndDelete(id);

      res.status(200).json({ message: 'sell deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the sell.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { description, items, name, email, phone } = req.body;
      const removedsell = await SelledPack.findById(id);
      if (!removedsell) {
        return res.status(404).json({ error: 'SelledPack not found.' });
      }
      const removeditems = removedsell.items;
      const removedsellPromises = removeditems.map(async (item: { pack: string, quantity: number }) => {
        await PackOfArticles.findByIdAndUpdate(item.pack, { selled: false });
      });

      // Wait for all sell promises to complete 
      await Promise.all(removedsellPromises);

      const sellPromises = items.map(async (item: { pack: string, quantity: number }) => {
        await PackOfArticles.findByIdAndUpdate(item.pack, { selled: true });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);
      // Update a sell
      const updatedselledPack = await SelledPack.findByIdAndUpdate(
        id,
        { description, items: items },
        { new: true }
      );

      const clientId = updatedselledPack?.client;

      const updatedclient = await Client.findByIdAndUpdate(
        clientId,
        { name, email, phone },
        { new: true }
      );


      res.status(200).json({ message: 'sell updated successfully.', sell: updatedselledPack });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the sell.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}