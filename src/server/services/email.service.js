import nodemailer from 'nodemailer';
// import google from 'googleapis';
const { google } = require('googleapis');

export const createUniqueString = () => {
  const len = 8;
  let randStr = '';
  for (let i = 0; i < len; i += 1) {
    const ch = Math.floor((Math.random() * 10) + 1);
    randStr += ch;
  }
  return randStr;
};

export const sendEmail = (email, uniqueString) => {
  const { OAuth2 } = google.auth;

  const myOAuth2Client = new OAuth2(process.env.EMAIL_CLIENT_ID, process.env.EMAIL_CLIENT_SECRET, 'https://developers.google.com/oauthplayground');

  myOAuth2Client.setCredentials({ refresh_token: process.env.EMAIL_CLIENT_REFRESH_TOKEN });

  const myAccessToken = myOAuth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.EMAIL_CLIENT_ID,
      clientSecret: process.env.EMAIL_CLIENT_SECRET,
      refreshToken: process.env.EMAIL_CLIENT_REFRESH_TOKEN,
      accessToken: myAccessToken, // access token variable we defined earlier
    },
  });
  const sender = process.env.EMAIL_USER;
  const mailOptions = {
    from: sender,
    to: email,
    subject: 'Email confirmation',
    html: `Press <a href="http://localhost:3000/api/verify/${uniqueString}"> here </a> to verify your email. Thanks`,
  };
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      res.json({
        message: err,
      });
    } else {
      transporter.close();
    }
    res.json({ message: 'Email has been sent: check your inbox!' });
  });
};

const emailService = {
  createUniqueString, sendEmail,
};

export default emailService;
