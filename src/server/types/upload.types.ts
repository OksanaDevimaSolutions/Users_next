import type { NextApiRequest } from "next";

export interface IUser {
  userId: number;
  email: string;
}
export interface NextApiUploadRequest extends NextApiRequest {
  user: IUser;
  file: Express.Multer.File;
}
export interface NextApiUploadMultyRequest extends NextApiRequest {
  user: IUser;
  files: Express.Multer.File[];
}
