import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { SelledPack } from '@/models/SelledPack';
import { Client } from '@/models/Client';
import { PackOfArticles } from '@/models/PackOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { description, packIds,clientId, name, email, phone } = req.body;

  if (req.method === 'POST') {
    try {
      const { description, packIds,clientId, name, email, phone } = req.body;

      const sellPromises = packIds.map(async(packId:String) => {
        await PackOfArticles.findByIdAndUpdate(packId, { selled: true });
      });

      // Wait for all sell promises to complete
      await Promise.all(sellPromises);
      if (!clientId) {
        const client = new Client({ name, email, phone });
        await client.save()
        clientId = client._id;
      }
      const selledPack = new SelledPack({ description, packs: packIds, client: clientId });
      await selledPack.save();

      res.status(201).json({ message: 'sell created successfully.', selledPack });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the sell.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}