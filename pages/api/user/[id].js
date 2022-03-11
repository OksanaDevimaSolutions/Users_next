import nc from 'next-connect';
import userService from '../../../src/server/services/user.service';
import validationSchema from '../../../src/server/validations/users.validation';

// console.log("hello from api.user.id");
const handler = nc({
})
  .get(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const result = await userService.getOneById(id);
      res.status(200).json(result);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      // const id = req.query.id;
      // await  validationSchema.schemaId.validate(id);
      const { id } = await validationSchema.schemaId.validate(req.query);
      const result = await userService.findByIdAndDelete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
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
  });
export default handler;
