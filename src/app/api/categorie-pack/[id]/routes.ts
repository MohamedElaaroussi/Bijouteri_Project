import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { CategoryOfPack } from '../../../../../models/CategoryOfPack';
import { PackOfArticles } from '../../../../../models/PackOfArticles';
import { getServerSession} from 'next-auth/next';
import { options } from '../../auth/[...nextauth]/routes';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getServerSession(req,res,options );

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch all categoryOfPacks
      const categoryOfPack = await CategoryOfPack.findById(id).exec();
      const packs = await PackOfArticles.find({ category: id }).populate('category');
      if (!categoryOfPack) {
        return res.status(404).json({ error: 'categoryOfPack not found' });
      }

      return res.status(200).json(packs);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching categoryOfPack.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Delete a categoryOfPack
      await CategoryOfPack.findByIdAndDelete(id);

      res.status(200).json({ message: 'categoryOfPack deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the categoryOfPack.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { name, description } = req.body;

      // Update a categoryOfPack
      const updatedcategoryOfPack = await CategoryOfPack.findByIdAndUpdate(
        id,
        { name, description },
        { new: true }
      );

      res.status(200).json({ message: 'categoryOfPack updated successfully.', categoryOfPack: updatedcategoryOfPack });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the categoryOfPack.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}