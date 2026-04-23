const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Try to Save to MongoDB (Optional - won't block email if fails)
    try {
      const newMessage = new Message({ name, email, subject, message });
      await newMessage.save();
      console.log('Message saved to database.');
    } catch (dbError) {
      console.error('Database Save Error (skipping):', dbError.message);
    }

    // 2. Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');

    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please check server configuration.' });
  }
});

module.exports = router;
