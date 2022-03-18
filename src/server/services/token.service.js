import jwt from 'jsonwebtoken';

// Create token
export const createToken = async (user) => {
  const result = await jwt.sign(
    { userId: user.userId, email: user.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: '2h',
    },
  );
  return result;
};

export default createToken;
