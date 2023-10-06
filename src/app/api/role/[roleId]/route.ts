import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { Role } from '../../../../../models/Role';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../../auth/[...nextauth]/route';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roleId } = req.query;
  const session = await getServerSession(req, res, OPTIONS);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch all roles
      const role = await Role.findById(roleId).populate('menus').exec();
      if (!role) {
        return res.status(404).json({ error: 'role not found' });
      }

      return res.status(200).json(role);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching role.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Delete a role
      await Role.findByIdAndDelete(roleId);

      res.status(200).json({ message: 'role deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the role.' });
    }
  } else if (req.method === "PUT") {
    try {

      // Find the role by roleId
      const existingrole = await Role.findById(roleId);

      if (!existingrole) {
        return res.status(404).json({ error: 'role not found.' });
      }

      // Retrieve the existing role data from the database
      const { name: existingName, menus: existingMenus } = existingrole;

      // Get the fields from req.body, or use the existing values if they are not present in req.body
      const { name, menus } = req.body || {};
      // Update a role
      const updatedrole = await Role.findByIdAndUpdate(
        roleId,
        { name: name || existingName, menus: menus || existingMenus },
        { new: true }
      );

      res.status(200).json({
        message: "role updated successfully.",
        role: updatedrole,
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
