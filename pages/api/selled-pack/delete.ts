import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { SelledPack } from '@/models/SelledPack';
import { PackOfArticles } from '@/models/PackOfArticles';


connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      const sell = await SelledPack.findById(id);
      if (!sell) {
        return res.status(404).json({ error: 'SelledPack not found.' });
      }
      const packIds = sell.packs;
      const sellPromises = packIds.map(async (packId) => {
        await PackOfArticles.findByIdAndUpdate(packId, { selled: false });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);

      // Delete a sell
      await SelledPack.findByIdAndDelete(id);

      res.status(200).json({ message: 'sell deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the sell.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}