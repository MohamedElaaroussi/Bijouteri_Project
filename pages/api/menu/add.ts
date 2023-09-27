import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../db/connection";
import { Menu } from "@/models/Menu";

connectToDatabase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    try {
      const { role, permission, menuId } = req.body;

      // find role by id
      const menu = await Menu.findOne({
        _id: menuId,
        roles: { $in: [role] },
      });

      // check if the user the permission exist
      const actionExist = menu?.permissions.includes(permission);

      // toogle the action to the menus
      if (!actionExist) {
        menu?.permissions.push(permission);
      } else {
        menu?.permissions.filter((per) => per !== permission);
      }

      await menu?.save();

      res.status(201).json({ message: "permission added successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while adding the permission." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
