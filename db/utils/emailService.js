// utils/emailService.js
import nodemailer from 'nodemailer';
import uuid4 from 'uuid';

// Generate a random reset password using UUID
export async function generateResetPassword() {
  // Generate a unique password using UUID (Universally Unique Identifier)
  const password = uuidv4();
  return password;
}

export async function sendPasswordResetEmail(email, resetPassword) {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE_PROVIDER , // Replace with your ESP (e.g., 'Gmail', 'SendGrid')
    auth: {
      user: process.env.EMAIL_ADDRESS, // Replace with your email address
      pass: process.env.EMAIL_PASSWORD, // Replace with your email password or API key
    },
  });

  // Email content
  const mailOptions = {
    from: 'your_email@example.com', // Replace with your email address
    to: email,
    subject: 'Password Reset',
    text: `This is your new password: ${resetPassword}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
}

