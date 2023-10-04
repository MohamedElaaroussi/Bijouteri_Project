import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { RepairArticle } from '../../../../../models/RepairArticle';
import { Client } from '../../../../../models/Client';
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
        // Fetch all repairArticless
        const repairArticle = await RepairArticle.findById(id).populate('client.name','user.name').exec();
        if (!repairArticle) {
            return res.status(404).json({ error: 'repairArticle not found' });
          }
    
          return res.status(200).json(repairArticle);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching repairArticle.' });
      }
    }else if (req.method === 'DELETE') {
      try {
  
        // Delete a repairArticleawait 
        RepairArticle.findByIdAndDelete(id);
  
        res.status(200).json({ message: 'repairArticle deleted successfully.' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the repairArticle.' });
      }
    }else if (req.method === 'PUT') {
      try {
        const { title, description, name, email, phone} = req.body;
  
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
    } 
     else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }