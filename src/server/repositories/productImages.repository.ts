import ProductImages from "../models/ProductImages.models";

const getOneById = async (id: number) => {
  const image = await ProductImages.findOne({
    where: {
      id,
    },
  });
  return image;
};
const getAll = async (productId: number) => {
  const images = await ProductImages.findAll({
    where: {
      productId,
    },
    order: [["id", "DESC"]],
  });
  return images;
};

const findByIdAndUpdate = async (id: number, image: string) => {
  const countUpdated = await ProductImages.update(
    { image },
    {
      where: {
        id,
      },
    }
  );
  return countUpdated[0];
};
const findByIdAndDelete = async (id: number) => {
  const countDeleted = await ProductImages.destroy({
    where: {
      id,
    },
  });

  return countDeleted > 0;
};
const createProductImage = async (productId: number, image: string) => {
  const newProduct = await ProductImages.create({ productId, image });

  return newProduct;
};
const productImagesRepository = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createProductImage,
};

export default productImagesRepository;
