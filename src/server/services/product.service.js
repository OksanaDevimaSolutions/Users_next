import productRepo from '../repositories/product.repository';

export const getOneById = async (id) => {
  const product = await productRepo.getOneById(id);
  return product;
};
export const getAll = async () => {
  const result = await productRepo.getAll();
  return result;
};
export const findByIdAndUpdate = (id, title, price, userId) => {
  const result = productRepo.findByIdAndUpdate(id, title, price, userId);
  return result;
};
export const findByIdAndDelete = async (id) => {
  const result = await productRepo.findByIdAndDelete(id);
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
