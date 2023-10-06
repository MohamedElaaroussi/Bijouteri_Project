import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import { Article } from '../../../../../models/Article';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../../auth/[...nextauth]/route';

connectToDatabase();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const session = await getServerSession(OPTIONS)
  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === 'GET') {
    try {
      // Fetch all articles
      const article = await Article.findById(id).populate('category', 'name').exec();
      if (!article) {
        return res.status(404).json({ error: 'article not found' });
      }

      return res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching article.' });
    }
  }
  else if (req.method === 'DELETE') {
    try {
      // Delete a article
      await Article.findByIdAndDelete(id);

      res.status(200).json({ message: 'article deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the article.' });
    }
  } else if (req.method === 'PUT') {
    try {
      // Check if the article with the provided 'id' exists in the database
      const existingarticle = await Article.findById(id);

      // If the article does not exist, return a 404 Not Found response
      if (!existingarticle) {
        return res.status(404).json({ error: 'article not found.' });
      }

      // Retrieve the existing article data from the database
      const { title: existingtitle, description: existingdescription, price: existingprice, category: existingcategoryId } = existingarticle;

      // Get the fields from req.body, or use the existing values if they are not present in req.body
      const { title = existingtitle, description = existingdescription, price = existingprice, categoryId = existingcategoryId } = req.body;

      // Update the article with the new or existing values
      // Update a article
      const updatedarticle = await Article.findByIdAndUpdate(
        id,
        { title, description, price, category: categoryId, user: session.user },
        { new: true }
      );

      res.status(200).json({ message: 'article updated successfully.', article: updatedarticle });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the article.' });
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}