import productService from '../../../src/server/services/product.service'
import validationSchema from '../../../src/server/validations/products.validation'
import nc from "next-connect";

const handler = nc({
})
  .get(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      res.status(200).json(productService.getOneById(id))
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
      res.status(200).json(productService.findByIdAndDelete(id));
    } catch (error) {
      res.status(500).json(error)
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const { title, price, user_id } = await validationSchema.schemaProductEdit.validate(req.body);
      const productToUpdate = productService.findByIdAndUpdate(id, title, price, user_id);

      res.status(200).json(productToUpdate);
    } catch (error) {
      res.status(500).json(error)
    }
  })
export default handler;
