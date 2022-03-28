import { google } from "googleapis";
import nodemailer from "nodemailer";

const createUniqueString = () => {
  const len = 8;
  let randStr = "";
  for (let i = 0; i < len; i += 1) {
    const ch = Math.floor(Math.random() * 10 + 1);
    randStr += ch;
  }
  return randStr;
};
const { OAuth2 } = google.auth;

const myOAuth2Client = new OAuth2(
  process.env.EMAIL_CLIENT_ID,
  process.env.EMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

myOAuth2Client.setCredentials({
  refresh_token: process.env.EMAIL_CLIENT_REFRESH_TOKEN,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_CLIENT_REFRESH_TOKEN,
  },
});

const sendEmail = async (email: string, uniqueString: string) => {
  const sender = process.env.EMAIL_USER;
  const mailOptions = {
    from: sender,
    to: email,
    subject: "Email confirmation",
    html: `Press <a href="http://localhost:3000/api/verify/${uniqueString}"> here </a> to verify your email. Thanks`,
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    transporter.close();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const emailService = {
  createUniqueString,
  sendEmail,
};

export default emailService;
