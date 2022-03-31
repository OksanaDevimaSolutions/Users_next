import productRepo from "../repositories/product.repository";

import type { ProductImagesInstance } from "../types/models/productImages.types";

const urlImagePathOne = async (product) => {
  const productEdited = product.map((item) => {
    item.ProductImages.image = "http://localhost:3000/uploads/" + item.image;
  });

  return productEdited;
};
const getOneById = async (id, userId) => {
  const product = await productRepo.getOneById(id, userId);
  return product;
  //return urlImagePathOne(product);
};
const urlImagePathAll = async (products) => {
  console.log("hello");

  const productsEdited = products.map(async (product) => {
    console.log(product);

    await product.map((item: ProductImagesInstance) => {
      console.log(item);

      item.image = "http://localhost:3000/uploads/" + item.image;
    });
  });
  return productsEdited;
};
const getAll = async (userId) => {
  const result = await productRepo.getAll(userId);
  return result;
  // return urlImagePathAll(result);
};
const findByIdAndUpdate = (id, title, price, userId) => {
  const result = productRepo.findByIdAndUpdate(id, title, price, userId);
  return result;
};
const findByIdAndDelete = async (id, userId) => {
  const result = await productRepo.findByIdAndDelete(id, userId);
  return result;
};
const createProduct = async (title, price, userId) => {
  const product = await productRepo.createProduct(title, price, userId);
  return product;
};

const productService = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createProduct,
};

export default productService;
