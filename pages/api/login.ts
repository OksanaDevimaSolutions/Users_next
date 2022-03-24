import bcrypt from "bcryptjs";
import nc from "next-connect";

import loggerMiddleware from "../../src/server/middlewares/logger.middleware";
import tokenService from "../../src/server/services/token.service";
import userService from "../../src/server/services/user.service";
import validationSchema from "../../src/server/validations/users.validation";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  .post(async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;

      await validationSchema.schemaEmailPassword
        .validate({ email, password })
        .catch((err) => {
          res.status(400).json(err.errors);
        });

      // Validate if user exist in our database
      const user = await userService.findEmail(email);

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = await tokenService.createToken({
          userId: user.id,
          email,
        });

        return res.status(200).json({ token });
      }
      return res.status(400).json({ message: "Invalid Credentials" });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });

export default handler;
