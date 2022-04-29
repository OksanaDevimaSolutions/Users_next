import productImagesRepo from "../repositories/productImages.repository";

const getOneById = async (id) => {
  const imageObj = await productImagesRepo.getOneById(id);
  if (imageObj) {
    imageObj.image = "/uploads/" + imageObj.image;
    return imageObj;
  }
  return null;
};
const getAll = async (productId) => {
  const imagesObjs = await productImagesRepo.getAll(productId);
  if (imagesObjs) {
    imagesObjs.map((item) => {
      item.image = "/uploads/" + item.image;
    });
  }
  return imagesObjs;
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
