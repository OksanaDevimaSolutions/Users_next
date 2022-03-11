import nc from 'next-connect';
import productService from '../../../src/server/services/product.service';
import validationSchema from '../../../src/server/validations/products.validation';

const handler = nc({
})
  .get(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const result = await productService.getOneById(id);
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
      const result = await productService.findByIdAndDelete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = await validationSchema.schemaId.validate(req.query);
      const { title, price, userId } = await validationSchema.schemaProductEdit.validate(req.body);
      const productToUpdate = await productService.findByIdAndUpdate(id, title, price, userId);
      res.status(200).json(productToUpdate);
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
