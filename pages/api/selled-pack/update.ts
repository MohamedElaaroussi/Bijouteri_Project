import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { SelledPack } from '@/models/SelledPack';
import { Client } from '@/models/Client';
import { PackOfArticles } from '@/models/PackOfArticles';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id, description, packIds, name, email, phone} = req.body;
          const removedsell = await SelledPack.findById(id);
          if (!removedsell) {
            return res.status(404).json({ error: 'SelledPack not found.' });
          }
          const removedpackIds = removedsell.packs;
          const removedsellPromises = removedpackIds.map(async (packId) => {
            await PackOfArticles.findByIdAndUpdate(packId, { selled: false });
          });
    
          // Wait for all sell promises to complete
          await Promise.all(removedsellPromises);
    
          const sellPromises = packIds.map(async(packId:string) => {
            await PackOfArticles.findByIdAndUpdate(packId, { selled: true });
          });
    
          // Wait for all sell promises to complete
          await Promise.all(sellPromises);    
          // Update a sell
          const updatedselledPack = await SelledPack.findByIdAndUpdate(
            id,
            { description, packs:packIds },
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
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }