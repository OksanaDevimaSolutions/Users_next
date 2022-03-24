import bcrypt from "bcryptjs";
import nc from "next-connect";

import loggerMiddleware from "../../src/server/middlewares/logger.middleware";
import emailService from "../../src/server/services/email.service";
import userService from "../../src/server/services/user.service";
import validationSchema from "../../src/server/validations/users.validation";
// import tokenService from '../../src/server/services/token.service';

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  //   .get(async (req, res) => {
  //     try {
  //       const getAllLogins = await userService.getAllLogins();
  //       res.status(200).json(getAllLogins);
  //     } catch (error) {
  //       res.status(500).json(error);
  //     }
  //   })
  .post(async (req, res) => {
    try {
      // Get user input
      const { email, password, name, age } = req.body;

      try {
        await validationSchema.schemaUserValidation.validate({
          name,
          age,
          email,
          password,
        });
      } catch (err) {
        return res.status(400).json(err.errors);
      }

      // check if user already exist
      const oldUser = await userService.findEmail(email);
      if (oldUser) {
        return res
          .status(409)
          .json({ message: "User Already Exist. Please Login" });
      }
      // Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);

      const uniqueString = await emailService.createUniqueString();
      console.log(uniqueString);

      // Create user in our database
      const user = await userService.createUser(
        email,
        encryptedPassword,
        name,
        age,
        uniqueString
      );

      await emailService.sendEmail(email, uniqueString);

      // Create token
      // const token = await tokenService.createToken(user.id, email);

      // return res.status(201).json({ message: 'user registered!', token });

      return res.status(201).json({
        message: `user ${user.id} registered! Please confirm your email to login`,
        // uniqueString: user.uniqueString,
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });

export default handler;
