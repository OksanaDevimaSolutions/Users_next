import nc from "next-connect";

import multerMiddleware from "../../../../src/server/middlewares/multer.middleware";
import productImagesService from "../../../../src/server/services/productImages.service";

import type { NextApiUploadMultyRequest } from "../../../../src/server/types/upload.types";
import type { NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc<NextApiUploadMultyRequest, NextApiResponse>({})
  .get(async (req, res) => {
    try {
      const getAllproductImages = await productImagesService.getAll(req.query);

      res.status(200).json(getAllproductImages);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .use(multerMiddleware.array("filesdata"))
  .post(async (req, res) => {
    try {
      req.files.forEach(async (element) => {
        await productImagesService.createProductImage(
          req.query,
          element.filename
        );
      });

      res.status(200).json("imageId");
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
