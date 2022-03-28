import productRepo from "../repositories/product.repository";

const getOneById = async (id, userId) => {
  const product = await productRepo.getOneById(id, userId);
  return product;
};
const getAll = async (userId) => {
  const result = await productRepo.getAll(userId);

  return result;
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
  try {
    const productId = await productRepo.createProduct(title, price, userId);
    return productId;
  } catch (err) {
    return `Can't create product:\n "${err.message}"`;
  }
};
const productService = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createProduct,
};

export default productService;
