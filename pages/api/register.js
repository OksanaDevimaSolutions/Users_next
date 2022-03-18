import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import validationSchema from '../../src/server/validations/users.validation';
import userService from '../../src/server/services/user.service';
import createToken from '../../src/server/services/token.service';
import loggerMiddleware from '../../src/server/middlewares/logger.middleware';

const handler = nc({
})
  .use(loggerMiddleware)
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
      const {
        email, password, name, age,
      } = req.body;

      await validationSchema.schemaEmailPassword.validate({ email, password })
        .catch((err) => res.status(400).json(err.errors));
      await validationSchema.schemaUserEdit.validate({ name, age })
        .catch((err) => res.status(400).json(err.errors));

      // check if user already exist
      const oldUser = await userService.findEmail(email);
      if (oldUser) {
        return res.status(409).json({ message: 'User Already Exist. Please Login' });
      }
      // Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await userService.createUser(email, encryptedPassword, name, age);

      // Create token
      const token = await createToken(user.id, email);

      return res.status(201).json({ message: 'user registered!', token });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });

export default handler;
