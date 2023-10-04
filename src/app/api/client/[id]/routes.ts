import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../../db/connection";
import { Client } from "../../../../../models/Client";
import { getSession } from 'next-auth/client';

connectToDatabase();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const session = await getSession({ req });

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === "GET") {
    try {
      // Fetch the client
      const client = await Client.findById(id).exec();
      if (!client) {
        return res.status(404).json({ error: "client not found" });
      }

      return res.status(200).json(client);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching client." });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      // Delete a client
      await Client.findByIdAndDelete(id);

      res.status(200).json({ message: 'client deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the client.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { name, email, phone} = req.body;

      // Update a client
      const updatedclient = await Client.findByIdAndUpdate(
        id,
        { name, email, phone },
        { new: true }
      );

      res.status(200).json({ message: 'client updated successfully.', client: updatedclient });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the client.' });
    }
  }else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}