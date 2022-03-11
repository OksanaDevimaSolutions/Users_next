import productRepo from '../repositories/product.repository';

export const getOneById = async (id) => await productRepo.getOneById(id);
export const getAll = () => productRepo.getAll();
export const findByIdAndUpdate = (id, title, price, userId) => {
  productRepo.findByIdAndUpdate(id, title, price, userId);
};
export const findByIdAndDelete = (id) => productRepo.findByIdAndDelete(id);
export const createProduct = (title, price, userId) => {
  productRepo.createProduct(title, price, userId);
};
// console.log(title,price,user_id);
const productService = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createProduct,
};

export default productService;
