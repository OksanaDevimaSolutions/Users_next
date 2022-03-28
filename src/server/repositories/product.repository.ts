import Product from "../models/Product.models";

const getOneById = async (id: number, userId: number) => {
  const product = await Product.findOne({
    where: {
      id,
      user_id: userId,
    },
  });
  if (product) {
    return product;
  }
  return null;
};
const getAll = async (userId: number) => {
  const products = await Product.findAll({
    where: {
      user_id: userId,
    },
    order: [["id", "DESC"]],
  });
  return products;
};

const findByIdAndUpdate = async (
  id: number,
  title: string,
  price: number,
  userId: number
) => {
  const countUpdated = await Product.update(
    { title, price, userId },
    {
      where: {
        id,
        user_id: userId,
      },
    }
  );
  return countUpdated[0];
};
const findByIdAndDelete = async (id: number, userId: number) => {
  const countDeleted = await Product.destroy({
    where: {
      id,
      user_id: userId,
    },
  });

  return countDeleted > 0;
};
const createProduct = async (title: string, price: number, userId: number) => {
  const newProduct = await Product.create({ title, price, userId });

  return newProduct;
};
const productRepository = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createProduct,
};

export default productRepository;
