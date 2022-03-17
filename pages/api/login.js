import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userService from '../../src/server/services/user.service';
import loggerMiddleware from '../../src/server/middlewares/logger.middleware';

const handler = nc({
})
  .use(loggerMiddleware)
  .post(async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
        res.status(400).json({ message: 'All input is required' });
      }
      // Validate if user exist in our database
      const user = await userService.findEmail(email);
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { userId: user.id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: '2h',
          },
        );

        res.status(200).json({ token });
      }
      res.status(400).json({ message: 'Invalid Credentials' });
    } catch (err) {
      res.status(500).json(err);
    }
  });

export default handler;
