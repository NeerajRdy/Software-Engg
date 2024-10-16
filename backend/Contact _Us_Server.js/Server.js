const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

//   // Configure nodemailer transport (use your email service details)
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', // e.g., 'gmail' or your email provider's service
//     auth: {
//       user: 'Neerajreddyaluka@gmail.com', // your email
//       pass: 'Fall2022' // your email password or app-specific password
//     }
//   });

  // Email options
  const mailOptions = {
    from: email,
    to: 'neerajreddyaluka@gmail.com', // where you want to receive the message
    subject: `New message from ${name}`,
    text: message,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending message.');
    }
    res.status(200).send('Message sent successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
