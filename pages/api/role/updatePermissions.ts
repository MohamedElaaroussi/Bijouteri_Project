import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../db/connection";
import { Role } from "@/models/Role";

connectToDatabase();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    try {
      const { roleId, menuId } = req.body;

      // Update a role
      const roleFound = await Role.findById(roleId);

      const menuFound = roleFound?.menus.includes(menuId);

      if (!menuFound) {
        roleFound?.menus.push(menuId);
      } else {
        roleFound?.menus.filter((menu) => menu !== menuId);
      }

      await roleFound?.save();

      res.status(200).json({ message: "role updated successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the role." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
