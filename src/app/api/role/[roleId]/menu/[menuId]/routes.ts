import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../../../db/connection';
import { Menu } from '../../../../../../../models/Menu';
import { Role } from '../../../../../../../models/Role';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/routes';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roleId,menuId } = req.query;
  const session = await getServerSession(req,res,options);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch a menu by its ID
      const menu = await Menu.findById(menuId).exec();
      if (!menu) {
        return res.status(404).json({ error: 'Menu not found' });
      }

      return res.status(200).json(menu);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'An error occurred while fetching the menu.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Input validation
      if (!roleId || !menuId) {
        return res.status(400).json({ error: 'Missing role ID or menu ID.' });
      }

      // Find the role by roleId
      const role = await Role.findById(roleId);

      // Check if the role exists
      if (!role) {
        return res.status(404).json({ error: 'Role not found.' });
      }

      // Check if the menu exists in the role's menus
      if (!role.menus.includes(menuId)) {
        return res.status(404).json({ error: 'Menu not found in the role.' });
      }

      // Remove the menu from the role's menus array
      const updatedRole = await Role.findByIdAndUpdate(
        roleId,
        { $pull: { menus: menuId } },
        { new: true }
      );

      if (!updatedRole) {
        return res.status(500).json({ error: 'Failed to update the role.' });
      }

      res.status(200).json({ message: 'Menu deleted from role.', role: updatedRole });
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'An error occurred while deleting the menu from the role.' });
    }
  } else if (req.method === "PUT") {
    try {
      // Input validation
      if (!roleId || !menuId) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      // Find the menu by menuId
      const existingMenu = await Menu.findById(menuId);

      if (!existingMenu) {
        return res.status(404).json({ error: 'Menu not found.' });
      }

      // Retrieve the existing menu data from the database
      const { name: existingName, permissions: existingPermissions } = existingMenu;

      // Get the fields from req.body, or use the existing values if they are not present in req.body
      const { name, permissions } = req.body || {};

      // Update the menu
      const updatedMenu = await Menu.findByIdAndUpdate(
        menuId,
        { name: name || existingName, permissions: permissions || existingPermissions },
        { new: true }
      );

      res.status(200).json({
        message: "Menu updated successfully.",
        menu: updatedMenu,
      });
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: "An error occurred while updating the menu." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
