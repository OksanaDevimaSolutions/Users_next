import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import userService from '../../src/server/services/user.service';
import createToken from '../../src/server/services/token.service';
import validationSchema from '../../src/server/validations/users.validation';
import loggerMiddleware from '../../src/server/middlewares/logger.middleware';

const handler = nc({
})
  .use(loggerMiddleware)
  .post(async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;

      validationSchema.schemaEmail.validate({ email }).catch((err) => {
        res.status(400).json(err.name, err.errors);
      });
      validationSchema.schemaPassword.validate({ password }).catch((err) => {
        res.status(400).json(err.name, err.errors);
      });
      // Validate if user exist in our database
      const user = await userService.findEmail(email);

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = await createToken({ userId: user.id, email });

        return res.status(200).json({ token });
      }
      return res.status(400).json({ message: 'Invalid Credentials' });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });

export default handler;
