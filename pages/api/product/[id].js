import productService from '../../../src/server/services/product.service'
import validationSchema from '../../../src/server/validations/products.validation'



import nc from "next-connect";
//console.log("hello from api.user.id");
const handler = nc({
})
  .get(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const result = await res.status(200).json(productService.getOneById(id))
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  })
  .delete(async (req, res) => {
    try {
      //const id = req.query.id;
      //await  validationSchema.schemaId.validate(id);
      const { id } = await validationSchema.schemaId.validate(req.query);
      const result = await res.status(200).json(productService.findByIdAndDelete(id));
    } catch (error) {
      res.status(500).json(error)
    }

  })
  .put(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const productTitle = req.body.title;
      const productPrice = req.body.price;
      const productUserId = req.body.user_id;

      await validationSchema.schemaUserEdit.validate({
        title: productTitle,
        price: productPrice
      });
      const { user_id } = await validationSchema.schemaId.validate(productUserId);

      const result = await res.status(200).json(productService.findByIdAndUpdate(id, productTitle, productPrice, productUserId));

    } catch (error) {
      res.status(500).json(error)
    }


  })
export default handler;
