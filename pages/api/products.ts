import nc from "next-connect";

import authMiddleware from "../../src/server/middlewares/auth.middleware";
import loggerMiddleware from "../../src/server/middlewares/logger.middleware";
import productService from "../../src/server/services/product.service";
import validationSchema from "../../src/server/validations/products.validation";

import type { NextApiAuthRequest } from "../../src/server/types/auth.types";
import type { NextApiResponse } from "next";

const handler = nc<NextApiAuthRequest, NextApiResponse>({})
  .use(loggerMiddleware)
  .use(authMiddleware)
  .get(async (req, res) => {
    try {
      const getAllproducts = await productService.getAll(req.user.userId);

      res.status(200).json(getAllproducts);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const productTitle = req.body.title;
      const productPrice = req.body.price;
      const productUserId = req.user.userId;

      await validationSchema.schemaProductEdit.validate({
        title: productTitle,
        price: productPrice,
      });

      await validationSchema.schemaId.validate({
        userId: productUserId,
      });

      const result = await productService.createProduct(
        productTitle,
        productPrice,
        productUserId
      );

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
