import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { Supplier } from '../../../../../models/Supplier';
import { getSession } from 'next-auth/client';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getSession({ req });

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch all suppliers
      const supplier = await Supplier.findById(id).exec();
      if (!supplier) {
        return res.status(404).json({ error: 'supplier not found' });
      }

      return res.status(200).json(supplier);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching supplier.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Delete a supplier
      await Supplier.findByIdAndDelete(id);

      res.status(200).json({ message: 'supplier deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the supplier.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { name, email, phone } = req.body;

      // Update a supplier
      const updatedsupplier = await Supplier.findByIdAndUpdate(
        id,
        { name, email, phone },
        { new: true }
      );

      res.status(200).json({ message: 'supplier updated successfully.', supplier: updatedsupplier });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the supplier.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}