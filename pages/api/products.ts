import nc from "next-connect";

import authMiddleware from "../../src/server/middlewares/auth.middleware";
import loggerMiddleware from "../../src/server/middlewares/logger.middleware";
import multerMiddleware from "../../src/server/middlewares/multer.middleware";
import productService from "../../src/server/services/product.service";
import productImagesService from "../../src/server/services/productImages.service";
import validationSchema from "../../src/server/validations/products.validation";

import type { NextApiAuthRequest } from "../../src/server/types/auth.types";
import type { NextApiUploadRequest } from "../../src/server/types/upload.types";
import type { NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

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
  .use(multerMiddleware.single("filedata"))
  .post(async (req: NextApiUploadRequest, res) => {
    try {
      const { title, price } =
        await validationSchema.schemaProductEdit.validate(req.body);

      const product = await productService.createProduct(
        title,
        price,
        req.user.userId
      );
      if (req.file) {
        const imageId = await productImagesService.createProductImage(
          product.id,
          req.file.filename
        );
        res.status(200).json(imageId);
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
