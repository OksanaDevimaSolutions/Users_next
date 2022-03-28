import nc from "next-connect";
import { ValidationError } from "yup";

import loggerMiddleware from "../../src/server/middlewares/logger.middleware";
import authservice from "../../src/server/services/auth.service";
import validationSchema from "../../src/server/validations/users.validation";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  .post(async (req, res) => {
    try {
      const { email, password } =
        await validationSchema.schemaEmailPassword.validate(req.body);

      const token = await authservice.authorizeUser(email, password);

      return res.status(200).json({ token });
    } catch (err) {
      if (err instanceof ValidationError) {
        res.status(412).json(err.message);
      }
      return res.status(500).json(err.message);
    }
  });

export default handler;
