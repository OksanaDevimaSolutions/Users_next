import productImagesRepo from "../repositories/productImages.repository";

const getOneById = async (id) => {
  const product = await productImagesRepo.getOneById(id);
  return product;
};
const getAll = async (productId) => {
  const result = await productImagesRepo.getAll(productId);

  return result;
};
const findByIdAndUpdate = (id, image) => {
  const result = productImagesRepo.findByIdAndUpdate(id, image);
  return result;
};
const findByIdAndDelete = async (id) => {
  const result = await productImagesRepo.findByIdAndDelete(id);
  return result;
};
const createProductImage = async (productId, image) => {
  const imageId = await productImagesRepo.createProductImage(productId, image);
  return imageId;
};

const productImagesService = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createProductImage,
};

export default productImagesService;
