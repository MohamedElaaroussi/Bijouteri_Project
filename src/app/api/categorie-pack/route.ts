import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { CategoryOfPack } from '../../../../models/CategoryOfPack';
import { getServerSession } from 'next-auth/next';
import { options } from '../auth/[...nextauth]/route';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req,res,options);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'POST') {
    try {
      const { name, description } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      // Create a new categoryOfPack
      const categoryOfPack = new CategoryOfPack({ name, description ,user: session.user });
      await categoryOfPack.save();

      res.status(201).json({ message: 'categoryOfPack created successfully.', categoryOfPack });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the categoryOfPack.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all categoryOfPacks
      const categoriesOfPacks = await CategoryOfPack.find().sort({ createdAt: -1 });

      res.status(200).json(categoriesOfPacks);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching categoriesOfPacks.' });
    }
  } else {
        res.status(405).json({ error: 'Method not allowed.' });
      }
    }
      