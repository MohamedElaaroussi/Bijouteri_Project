import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { RepairArticle } from '@/models/RepairArticle';
import { Client } from '@/models/Client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
          const { id, title, description, name, email, phone} = req.body;
    
          // Update a repairArticles
          const updatedrepairArticle = await RepairArticle.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
          );
    
          const clientId = updatedrepairArticle?.client;

          const updatedclient = await Client.findByIdAndUpdate(
             clientId,
            { name, email, phone },
            { new: true }
            );

          res.status(200).json({ message: 'repairArticle updated successfully.', repairArticle: updatedrepairArticle });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the repairArticle.' });
        }
      }else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }