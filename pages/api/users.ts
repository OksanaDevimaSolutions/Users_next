import nc from "next-connect";

import loggerMiddleware from "../../src/server/middlewares/logger.middleware";
import userService from "../../src/server/services/user.service";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  .get(async (req, res) => {
    try {
      const getAllusers = await userService.getAll();
      res.status(200).json(getAllusers);
    } catch (error) {
      res.status(500).json(error);
    }
  });

export default handler;
