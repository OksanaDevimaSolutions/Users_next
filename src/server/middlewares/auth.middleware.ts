import jwt from "jsonwebtoken";

import type { IUser, NextApiAuthRequest } from "../types/auth.types";
import type { NextApiResponse } from "next";
import type { NextHandler } from "next-connect";

const authMiddleware = (
  req: NextApiAuthRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const token = req.headers["x-access-token"].toString();

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    if (typeof decoded === "string") {
      throw new Error(decoded);
    }
    req.user = decoded as IUser;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default authMiddleware;
