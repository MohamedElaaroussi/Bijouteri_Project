import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../db/connection';
import { RepairArticle } from '@/models/RepairArticle';
import { Client } from '@/models/Client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, description, userId, clientId, name, email, phone } = req.body;
        if(!clientId){
          const client = new Client({ name, email, phone });
          await client.save();
    
          // Create a new repair  
          const repairArticle = new RepairArticle({ title, description, user: userId, client: client._id });
          await repairArticle.save();
          }

      // Create a new repairArticle
      const repairArticle = new RepairArticle({ title, description, user: userId, client: clientId });
      await repairArticle.save();

      res.status(201).json({ message: 'repairArticle created successfully.', repairArticle });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the repairArticle.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}