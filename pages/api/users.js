import nc from 'next-connect';
import userService from '../../src/server/services/user.service';
import validationSchema from '../../src/server/validations/users.validation';
import loggerMiddleware from '../../src/server/middlewares/logger.middleware';

// console.log("hello from api.user.id");
const handler = nc({
})
  .use(loggerMiddleware)
  .get(async (req, res) => {
    try {
      const getAllusers = await userService.getAll();
      res.status(200).json(getAllusers);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const userName = req.body.name;
      const userAge = req.body.age;
      await validationSchema.schemaUserEdit.validate({
        name: userName,
        age: userAge,
      });
      const result = await userService.createUser(userName, userAge);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });

export default handler;
