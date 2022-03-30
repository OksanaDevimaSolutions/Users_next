import multer from "multer";
import nc from "next-connect";

import productService from "../../src/server/services/product.service";
import productImagesService from "../../src/server/services/productImages.service";

import type { NextApiUploadRequest } from "../../src/server/types/upload.types";
import type { NextApiResponse } from "next";

const handler = nc<NextApiUploadRequest, NextApiResponse>({})
  .get(async (req, res) => {
    try {
      const getAllproductImages = await productImagesService.getAll(
        req.product.productId
      );

      res.status(200).json(getAllproductImages);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const storageConfig = multer.diskStorage({
        destination: "../../public/uploads/",
        filename: req.body.filedata.file.filename,
      });

      // определение фильтра
      const fileFilter = () => {
        if (
          req.body.filedata.file.mimetype === "image/png" ||
          req.body.filedata.file.mimetype === "image/jpg" ||
          req.body.filedata.file.mimetype === "image/jpeg"
        ) {
          return true;
        } else {
          return false;
        }
      };
      if (fileFilter) {
        const result = await multer({
          storage: storageConfig,
        }).single("filedata");
      }

      const result = await productImagesService.createProductImage(
        req.product.productId,
        req.body.filedata.file.filename
      );

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
