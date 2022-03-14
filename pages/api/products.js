import nc from 'next-connect';
import productService from '../../src/server/services/product.service';
import logsService from '../../src/server/services/logs.service';
import validationSchema from '../../src/server/validations/products.validation';

const express = require('express');

const app = express();

// console.log("hello from api.user.id");
const handler = nc({
})
  .get(async (req, res) => {
    try {
      const getAllproducts = await productService.getAll();

      const route = req.query;
      const body = '';
      const time = Date.now();
      app.use(logsService.createLogs(route, body, time));

      res.status(200).json(getAllproducts);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const productTitle = req.body.title;
      const productPrice = req.body.price;
      const productUserId = req.body.user_id;

      await validationSchema.schemaProductEdit.validate({
        title: productTitle,
        price: productPrice,
      });

      await validationSchema.schemaId.validate({
        userId: productUserId,
      });

      const result = await productService.createProduct(productTitle, productPrice, productUserId);

      const route = req.query;
      const body = JSON.stringify({
        title: productTitle,
        price: productPrice,
        userId: productUserId,
      });
      const time = Date.now();
      app.use(logsService.createLogs(route, body, time));

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default handler;
