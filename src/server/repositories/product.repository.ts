import Product from '../models/Product.models';

export const getOneById = async (id:number, userId:number) => {
  const product = await Product.findAll({
    where: {
      id,
      user_id: userId,
    },
  });
  if (product[0]) {
    return product[0];
  }
  return null;
};
export const getAll = async (userId:number) => {
  const products = await Product.findAll({
    where: {
      user_id: userId,
    },
    order: [
      ['id', 'DESC'],
    ],
  });
  return products;
};

export const findByIdAndUpdate = async (id:number, title:string, price:number, userId:number) => {
  const countUpdated = await +Product.update({ title, price, userId }, {
    where: {
      id,
      user_id: userId,
    },
  });

  if (countUpdated > 0) {
    return true;
  }

  return false;
};
export const findByIdAndDelete = async (id:number, userId:number) => {
  const countDeleted = await Product.destroy({
    where: {
      id,
      user_id: userId,
    },
  });

  return countDeleted > 0;
};
export const createProduct = async (title:string, price:number, userId:number) => {
  const newProduct = await Product.create({ title, price, userId });

  return newProduct;
};
const productRepository = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createProduct,
};

export default productRepository;