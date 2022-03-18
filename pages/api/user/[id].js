import nc from 'next-connect';
import userService from '../../../src/server/services/user.service';
import validationSchema from '../../../src/server/validations/users.validation';
import loggerMiddleware from '../../../src/server/middlewares/logger.middleware';
import authMiddleware from '../../../src/server/middlewares/auth.middleware';

const handler = nc({
})
  .use(loggerMiddleware)
  .use(authMiddleware)
  .get(async (req, res) => {
    if (+req.query.id === +req.user.userId) {
      try {
        const { id } = await validationSchema.schemaId.validate(req.query);
        const result = await userService.getOneById(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json({ message: 'You can only view your own profile' });
    }
  })
  .delete(async (req, res) => {
    if (+req.query.id === +req.user.userId) {
      try {
        const { id } = await validationSchema.schemaId.validate({ id: req.user.userId });
        const result = await userService.findByIdAndDelete(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json({ message: 'You can only delete your own profile' });
    }
  })
  .put(async (req, res) => {
    if (parseInt(req.query.id) === parseInt(req.user.userId)) {
      try {
        const { id } = await validationSchema.schemaId.validate({ id: req.user.userId });
        const userName = req.body.name;
        const userAge = req.body.age;

        await validationSchema.schemaUserEdit.validate({
          name: userName,
          age: userAge,
        });
        const result = await userService.findByIdAndUpdate(id, userName, userAge);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json({ message: 'You can only edit your own profile' });
    }
  });
export default handler;
