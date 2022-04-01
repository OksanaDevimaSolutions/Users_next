import userRepo from "../repositories/user.repository";

const urlImagePathOne = async (userObj) => {
  await userObj.Products.map((productObjs) => {
    productObjs.ProductImages.map((productImageObj) => {
      productImageObj.image = "/uploads/" + productImageObj.image;
    });
  });
  return userObj;
};
const urlImagePathAll = async (userObjs) => {
  await userObjs.map((user) => {
    user.Products.map((product) => {
      product.ProductImages.map((productImageObj) => {
        productImageObj.image = "/uploads/" + productImageObj.image;
      });
    });
  });
  return userObjs;
};
const getOneById = async (id: number) => {
  const user = await userRepo.getOneById(id);
  if (user) {
    return urlImagePathOne(user);
  }
  return user;
};
const getAll = async () => {
  const result = await userRepo.getAll();
  if (result) {
    return urlImagePathAll(result);
  }
  return result;
};
const findByIdAndUpdate = async (id: number, name: string, age: number) => {
  const result = await userRepo.findByIdAndUpdate(id, name, age);
  return result;
};
const findByIdAndDelete = async (id: number) => {
  const result = await userRepo.findByIdAndDelete(id);
  return result;
};
const createUser = async (
  email: string,
  password: string,
  name: string,
  age: number,
  uniqueString: string
) => {
  const user = await userRepo.createUser(
    email,
    password,
    name,
    age,
    uniqueString
  );
  return user;
};
const getAllEmails = async () => {
  const result = await userRepo.getAllEmails();
  return result;
};
const findEmail = async (email: string) => {
  const user = await userRepo.findEmail(email);
  return user;
};
const findByUniqueStringAndConfirm = async (uniqueString: string) => {
  const user = await userRepo.findByUniqueStringAndConfirm(uniqueString);
  return user;
};

const userService = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createUser,
  getAllEmails,
  findEmail,
  findByUniqueStringAndConfirm,
};

export default userService;
