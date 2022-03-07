import productService from '../../src/server/services/product.service'
import validationSchema from '../../src/server/validations/products.validation'
import nc from "next-connect";


//console.log("hello from api.user.id");
const handler = nc({
})
  .get(async (req, res) => {
    try {
      const getAllproducts = await productService.getAll()
      res.status(200).json(getAllproducts)
    } catch (error) {
      res.status(500).json(error)
    }
  })
  .post(async (req, res) => {
    try {
      const productTitle = req.body.title;
      const productPrice = req.body.price;
      const productUserId = req.body.user_id;

      await validationSchema.schemaProductEdit.validate({
        title: productTitle,
        price: productPrice
      });

      await validationSchema.schemaId.validate({
        user_id: productUserId
      });

      await res.status(200).json(productService.createProduct(productTitle, productPrice, productUserId));
    } catch (error) {
      res.status(500).json(error)
    }
  })
export default handler;