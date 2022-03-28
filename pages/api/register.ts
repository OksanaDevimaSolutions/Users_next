import nc from "next-connect";

import loggerMiddleware from "../../src/server/middlewares/logger.middleware";
import authservice from "../../src/server/services/auth.service";
import validationSchema from "../../src/server/validations/users.validation";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  .post(async (req, res) => {
    try {
      const { email, password, name, age } =
        await validationSchema.schemaUserValidation.validate(req.body);

      const user = await authservice.createUser(email, password, name, age);

      if (user) {
        return res.status(201).json({
          message: `user ${user.id} registered! Please confirm your email to login`,
        });
      }
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });

export default handler;
