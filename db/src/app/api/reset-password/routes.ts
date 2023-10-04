import { NextApiRequest, NextApiResponse } from "next";
import { generateResetPassword, sendPasswordResetEmail } from '../../../../utils/emailService';
import { User } from "../../../../models/User";
import bcrypt from 'bcryptjs';

export default async (req: NextApiRequest,
    res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;
        // Generate a unique reset Password
        const resetPassword = generateResetPassword();
        
        const hashPassword = await bcrypt.hash( await resetPassword, process.env.SECRET );

        const user = User.findOneAndUpdate({email},
            {
                password: hashPassword,
            }
            )

        // Send a password reset email with the Password
        sendPasswordResetEmail(email, resetPassword);

        return res.status(200).json({ message: 'Password reset email sent' });
    }
};