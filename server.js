import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors());
app.use(express.json());

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  // Remove server version disclosure
  res.removeHeader('X-Powered-By');

  next();
});

// Redirect HTTP to HTTPS in production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

console.log('SMTP Configuration:');
console.log('SMTP Server:', process.env.SMTP_SERVER);
console.log('SMTP Port:', process.env.SMTP_PORT);
console.log('SMTP Username:', process.env.SMTP_USERNAME ? 'Provided' : 'Not Provided');
console.log('SMTP From Address:', process.env.SMTP_FROM_ADDRESS);

// Create transporter using SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verify transporter
try {
  await transporter.verify();
  console.log('SMTP server connection successful');
} catch (error) {
  console.error('SMTP server connection failed:', error.message);
}


// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM_ADDRESS,
      to: 'info@intellize.de',
      subject: `Neue Kontaktanfrage: ${subject}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Betreff:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    // Send confirmation email to user
    const confirmationTemplate = fs.readFileSync(
      path.join(__dirname, 'src/emailTemplates/confirmationEmail.html'),
      'utf-8'
    );
    
    const confirmationHtml = confirmationTemplate
      .replace('{{NAME}}', escapeHtml(name))
      .replace('{{SUBJECT}}', escapeHtml(subject));

    await transporter.sendMail({
      from: process.env.SMTP_FROM_ADDRESS,
      to: email,
      subject: 'Bestätigung: Ihre Nachricht bei Intellize',
      html: confirmationHtml,
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Fallback for client-side routing - must be after all API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});
