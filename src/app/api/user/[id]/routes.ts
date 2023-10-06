import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { User } from '../../../../../models/User';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../../auth/[...nextauth]/routes';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getServerSession(req, res, OPTIONS);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      // Fetch all users
      const user = await User.findById(id).exec();
      if (!user) {
        return res.status(404).json({ error: 'user not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching user.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      // Delete a user
      await User.findByIdAndDelete(id);

      res.status(200).json({ message: 'user deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      // Check if 'id' parameter is missing
      if (!id) {
        return res.status(400).json({ error: 'User ID is required for updating.' });
      }

      // Check if the user with the provided 'id' exists in the database
      const existingUser = await User.findById(id);

      // If the user does not exist, return a 404 Not Found response
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found.' });
      }

      // Retrieve the existing user data from the database
      const { username: existingUsername, email: existingEmail, phone: existingPhone, password: existingPassword, role: existingRoleId } = existingUser;


      // Get the fields from req.body, or use the existing values if they are not present in req.body
      const { username = existingUsername, email = existingEmail, phone = existingPhone, password = existingPassword, roleId = existingRoleId } = req.body;

      // Update the user with the new or existing values
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, email, phone, password, role: roleId },
        { new: true } // Return the updated user after the update
      );

      res.status(200).json({ message: 'user updated successfully.', user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}