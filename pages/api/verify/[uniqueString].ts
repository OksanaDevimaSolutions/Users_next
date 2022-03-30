import nc from "next-connect";

import userService from "../../../src/server/services/user.service";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>({}).get(
  async (req, res) => {
    try {
      const { uniqueString } = req.query;

      const result = await userService.findByUniqueStringAndConfirm(
        uniqueString.toString()
      );

      if (result) {
        return res
          .status(200)
          .json({ message: "email confirmed. Please login" });
      }

      return res
        .status(404)
        .json({ message: "Something went wrong. Please try again" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

export default handler;
