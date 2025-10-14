import type { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASS,
  MAIL_TO,
} = process.env;

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    if (!MAIL_HOST || !MAIL_PORT || !MAIL_USER || !MAIL_PASS || !MAIL_TO) {
      return { statusCode: 500, body: 'Server email configuration missing' };
    }

    const { name, email, message } = JSON.parse(event.body || '{}');
    if (!name || !email || !message) {
      return { statusCode: 400, body: 'Missing fields' };
    }

    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: Number(MAIL_PORT) === 465,
      auth: { user: MAIL_USER, pass: MAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${MAIL_USER}>`,
      to: MAIL_TO,
      subject: `📩 Nouveau message de ${name}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { statusCode: 200, body: 'OK' };
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
catch (err: any) {
  console.error(err);
  return { statusCode: 500, body: 'Erreur interne' };
}
};