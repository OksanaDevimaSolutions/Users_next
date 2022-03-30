import multer from "multer";

import type { NextApiRequest, NextApiResponse } from "next";
import type { NextHandler } from "next-connect";

const multerMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  file: multer.File,
  next: NextHandler
) => {
  const storageConfig = multer.diskStorage({
    destination: "../../../public/uploads/",
    filename: file.originalname,
  });

  // определение фильтра
  const fileFilter = () => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      return true;
    } else {
      return false;
    }
  };
  multer({
    storage: storageConfig,
    fileFilter: fileFilter,
  }).single("filedata");

  next();
};

export default multerMiddleware;
