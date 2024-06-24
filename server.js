const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'noreply@ourdomain.com',
        pass: 'your-email-password'  // Replace with the actual password
    }
});

// Express route for sending OTP
app.post('/contact', (req, res) => {
    const mail = req.body;

    // Email message configuration
    const mailOptions = {
        from: 'noreply@ourdomain.com',
        to: mail.to, // Ensure you set the recipient's email address
        subject: mail.subject,
        text: mail.text
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) { 
            console.error('Error sending email:', error);
            res.status(500).send('Error sending mail');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
