import nc from "next-connect";

import multerMiddleware from "../../../../src/server/middlewares/multer.middleware";
import productImagesService from "../../../../src/server/services/productImages.service";

import type { NextApiUploadRequest } from "../../../../src/server/types/upload.types";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc<NextApiRequest, NextApiResponse>({})
  .get(async (req, res) => {
    try {
      console.log(req.query);

      //   const getAllproductImages = await productImagesService.getOneById(
      //     req.query
      //   );

      //   res.status(200).json(getAllproductImages);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .use(multerMiddleware.single("filedata"))
  .put(async (req: NextApiUploadRequest, res) => {
    try {
      if (req.file.filename) {
        const imageId = await productImagesService.findByIdAndUpdate(
          req.query,
          req.file.filename
        );

        res.status(200).json(imageId);
      } else {
        res.status(404).json("no file chosen");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      // console.log(req);

      //   const { id } = await validationSchema.schemaId.validate(req.query);
      const id = req.query;
      const result = await productImagesService.findByIdAndDelete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
