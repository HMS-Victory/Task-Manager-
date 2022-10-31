const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KAY);

const sendWelcomeEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: 'jtalbot86@s.tooeletech.edu',
      subject: 'Thanks for joining us!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
   });
}

const sendGoodbyEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: 'jtalbot86@s.tooeletech.edu',
      subject: 'We are sorry to see you go',
      text: `We'll miss you ${name}.`
   });
}

module.exports = {
   sendWelcomeEmail,
   sendGoodbyEmail
}