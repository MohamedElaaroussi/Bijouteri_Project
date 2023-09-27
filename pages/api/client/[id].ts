import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../db/connection";
import { Client } from "@/models/Client";

connectToDatabase();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;

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
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
