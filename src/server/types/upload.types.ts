import type multer from "multer";
import type { NextApiRequest } from "next";

export interface IProduct {
  productId: number;
  file: multer.File;
}

export interface NextApiUploadRequest extends NextApiRequest {
  product: IProduct;
}
