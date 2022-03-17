import productRepo from '../repositories/product.repository';

// function returns 1 product or an empty strin if that kind of product is absent
export const getOneById = async (id, userId) => {
  const product = await productRepo.getOneById(id, userId);
  return product;
};
export const getAll = async (userId) => {
  const result = await productRepo.getAll(userId);
  return result;
};
export const findByIdAndUpdate = (id, title, price, userId) => {
  const result = productRepo.findByIdAndUpdate(id, title, price, userId);
  return result;
};
export const findByIdAndDelete = async (id, userId) => {
  const result = await productRepo.findByIdAndDelete(id, userId);
  return result;
};
export const createProduct = async (title, price, userId) => {
  try {
    const productId = await productRepo.createProduct(title, price, userId);
    return productId;
  } catch (err) {
    return `Can't create product:\n "${err.message}"`;
  }
};
// console.log(title,price,user_id);
const productService = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createProduct,
};

export default productService;
