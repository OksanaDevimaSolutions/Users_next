import jwt from "jsonwebtoken";

const createToken = async (user) => {
  const result = await jwt.sign(
    { userId: user.userId, email: user.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
  return result;
};

const tokenService = { createToken };
export default tokenService;
