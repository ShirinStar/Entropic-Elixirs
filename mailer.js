require('dotenv').config();

const nodemailer = require('nodemailer');
const fs = require('fs');

const Email = require('email-templates');

const EMAIL_ADDRESS = process.env.EMAIL_SENDER_ADDRESS;

const creds = JSON.parse(fs.readFileSync('creds.json'));

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY
  },
});

const email = new Email({
  message: {
        from: EMAIL_ADDRESS
      
  },
    // uncomment below to send emails in development/test env:
  send: true,
  transport: transporter
});

export async function sendMail(address, answers) {
  await email
    .send({
      template: 'elixirs',
      message: {
        to: address
      },
      locals: {
        bar: answers
      }
    })
    .then(console.log)
    .catch(console.error);
}
