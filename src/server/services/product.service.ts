import productRepo from "../repositories/product.repository";

const urlImagePathOne = async (productObj) => {
  await productObj.ProductImages.map((productImageObj) => {
    productImageObj.image = "/uploads/" + productImageObj.image;
  });
  return productObj;
};
const getOneById = async (id, userId) => {
  const product = await productRepo.getOneById(id, userId);
  if (product) {
    return urlImagePathOne(product);
  }
  return product;
};
const urlImagePathAll = async (productObjs) => {
  await productObjs.map((product) => {
    product.ProductImages.map((productImageObj) => {
      productImageObj.image = "/uploads/" + productImageObj.image;
    });
  });
  return productObjs;
};

const getAll = async (userId) => {
  const productObjs = await productRepo.getAll(userId);
  if (productObjs) {
    return urlImagePathAll(productObjs);
  }
  return productObjs;
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
