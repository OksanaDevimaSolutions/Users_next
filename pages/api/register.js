import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import emailMiddleware from '../../src/server/middlewares/email.middleware';
import validationSchema from '../../src/server/validations/users.validation';
import userService from '../../src/server/services/user.service';

const handler = nc({
})
// .use(loginMiddleware)
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
        name, email, password, age,
      } = req.body;
      await validationSchema.schemaUserEdit.validate({
        name,
        age,
      });
      // Validate user input
      if (!(email && password && name && age)) {
        res.status(400).send('All input is required');
      }

      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await userService.findLogin({ email });

      if (oldUser) {
        return res.status(409).send('User Already Exist. Please Login');
      }
      // Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await userService.createUser({
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        name,
        age,
      });

      // Create token
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        },
      );
      // save user token
      user.token = token;

      // return new user
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    // Our register logic ends here
    return 'user registered!';
  });

export default handler;
