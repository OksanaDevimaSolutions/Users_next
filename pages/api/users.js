import userService from '../../src/server/services/user.service'
import validationSchema from '../../src/server/validations/users.validation.js'



import nc from "next-connect";
//console.log("hello from api.user.id");
const handler = nc({
})
  .get(async (req, res) => {
    try {
      const getAllusers = await userService.getAll()
      res.status(200).json(getAllusers)
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  })
  .post(async (req, res) => {
    try {
      const userName = req.body.name;
      const userAge = req.body.age;
      await validationSchema.schemaUserEdit.validate({
        name: userName,
        age: userAge
      });
     await res.status(200).json(userService.createUser(userName, userAge));
    } catch (error) {
      res.status(500).json(error)
    }
  })
export default handler;