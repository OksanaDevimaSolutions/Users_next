import nc from "next-connect";

import authMiddleware from "../../../src/server/middlewares/auth.middleware";
import loggerMiddleware from "../../../src/server/middlewares/logger.middleware";
import productService from "../../../src/server/services/product.service";
import validationSchema from "../../../src/server/validations/products.validation";

import type { NextApiAuthRequest } from "../../../src/server/types/auth.types";
import type { NextApiResponse } from "next";

const handler = nc<NextApiAuthRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  .use(authMiddleware)
  .get(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const result = await productService.getOneById(id, req.user.userId);

      if (!result) {
        return res.status(404).json({ message: "no results..." });
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const result = await productService.findByIdAndDelete(
        id,
        req.user.userId
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const { title, price } =
        await validationSchema.schemaProductEdit.validate(req.body);

      const productToUpdate = await productService.findByIdAndUpdate(
        id,
        title,
        price,
        req.user.userId
      );
      res.status(200).json(productToUpdate);
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
