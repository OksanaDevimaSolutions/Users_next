import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import loginMiddleware from '../../src/server/middlewares/login.middleware';
import userService from '../../src/server/services/user.service';

const handler = nc({
})
  .use(loginMiddleware)
//   .get(async (req, res) => {
//     try {
//       const getAllLogins = await userService.getAllLogins();
//       res.status(200).json(getAllLogins);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   })
  .post(async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
        res.status(400).send('All input is required');
      }
      // Validate if user exist in our database
      const user = await await userService.findLogin({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { userId: user.id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: '2h',
          },
        );

        // save user token
        user.token = token;

        // user
        res.status(200).json(user);
      }
      res.status(400).send('Invalid Credentials');
    } catch (err) {
      res.status(500).json(err);
    }
    // Our register logic ends here
  });

export default handler;
