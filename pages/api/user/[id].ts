import nc from "next-connect";

import authMiddleware from "../../../src/server/middlewares/auth.middleware";
import loggerMiddleware from "../../../src/server/middlewares/logger.middleware";
import userService from "../../../src/server/services/user.service";
import validationSchema from "../../../src/server/validations/users.validation";

import type { NextApiAuthRequest } from "../../../src/server/types/auth.types";
import type { NextApiResponse } from "next";

const handler = nc<NextApiAuthRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  .use(authMiddleware)
  .get(async (req, res) => {
    if (parseInt(req.query.id.toString()) === req.user.userId) {
      try {
        const { id } = await validationSchema.schemaId.validate(req.query);
        const result = await userService.getOneById(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json({ message: "You can only view your own profile" });
    }
  })
  .delete(async (req, res) => {
    if (parseInt(req.query.id.toString()) === req.user.userId) {
      try {
        const { id } = await validationSchema.schemaId.validate({
          id: req.user.userId,
        });
        const result = await userService.findByIdAndDelete(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json({ message: "You can only delete your own profile" });
    }
  })
  .put(async (req, res) => {
    if (parseInt(req.query.id.toString()) === req.user.userId) {
      try {
        const { id } = await validationSchema.schemaId.validate({
          id: req.user.userId,
        });

        const { name, age } = await validationSchema.schemaUserEdit.validate({
          name: req.body.name,
          age: req.body.age,
        });
        const result = await userService.findByIdAndUpdate(id, name, age);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json({ message: "You can only edit your own profile" });
    }
  });
export default handler;
