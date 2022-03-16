import Product from '../models/Product.models';

export const getOneById = async (id) => {
  const product = await Product.findAll({
    where: {
      id,
    },
  });
  if (product[0]) {
    return product[0];
  }
  return false;
};
export const getAll = async () => {
  const products = await Product.findAll({
    order: [
      ['id', 'DESC'],
    ],
  });
  return products;
};

export const findByIdAndUpdate = async (id, title, price, userId) => {
  const countUpdated = await Product.update({ title, price, userId }, {
    where: {
      id,
    },
  });

  if (countUpdated > 0) {
    return true;
  }

  return false;
};
export const findByIdAndDelete = async (id) => {
  const countDeleted = await Product.destroy({
    where: {
      id,
    },
  });

  if (countDeleted > 0) {
    return true;
  }

  return false;
};
export const createProduct = async (title, price, userId) => {
  const newProduct = await Product.create({ title, price, userId });

  return newProduct.id;
};
const productRepository = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createProduct,
};

export default productRepository;
