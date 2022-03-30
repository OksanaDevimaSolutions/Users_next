import type { NextApiRequest } from "next";

export interface IUser {
  userId: number;
  email: string;
}

export interface NextApiAuthRequest extends NextApiRequest {
  user: IUser;
}
