import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../db/connection";
import { Role } from "@/models/Role";

connectToDatabase();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const { id, name } = req.body;
      const role = await Role.findById(id);

      // Update a role
      const updatedrolepermissions = await Role.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );

      res.status(200).json({
        message: "role updated successfully.",
        role: updatedrolepermissions,
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the role." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
