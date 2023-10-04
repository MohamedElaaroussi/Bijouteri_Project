import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../../../db/connection";
import { Role } from "../../../../../../models/Role";
import { Menu } from "../../../../../../models/Menu";
import { getSession } from 'next-auth/client';

connectToDatabase();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { roleId } = req.query;
  const session = await getSession({ req });

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === "POST") {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      // Create a new Menu
      const menu = new Menu({ name,permissions:[] });
      await menu.save();
      await Role.findByIdAndUpdate(
        roleId,
        {
          $addToSet: { menus: menu._id  },
        },
        { new: true },
      );

      res.status(201).json({ message: "menu created successfully.", menu });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the menu." });
    }
  } else if (req.method === 'GET') {
    try {
        const roleFound = await Role.findById(roleId);
  
        const menus = roleFound?.menus;

      res.status(200).json(menus);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching menus.' });
    }
  }else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
