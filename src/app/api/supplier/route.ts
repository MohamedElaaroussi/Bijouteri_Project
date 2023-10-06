import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../db/connection';
import { Supplier } from '../../../../models/Supplier';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../auth/[...nextauth]/route';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, OPTIONS);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'POST') {
    try {
      const { name, email, phone } = req.body;
      if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      // Create a new supplier
      const supplier = new Supplier({ name, email, phone, user: session.user });
      await supplier.save();

      res.status(201).json({ message: 'supplier created successfully.', supplier });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the supplier.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all suppliers
      const suppliers = await Supplier.find().sort({ createdAt: -1 });

      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching suppliers.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
