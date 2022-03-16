import userRepo from '../repositories/user.repository';

export const getOneById = async (id) => {
  const user = await userRepo.getOneById(id);
  return user;
};
export const getAll = async () => {
  try {
    const result = await userRepo.getAll();
    return result;
  } catch (err) {
    return `Can't load products error:\n ${err.message}`;
  }
};
export const findByIdAndUpdate = async (id, name, age) => {
  const result = await userRepo.findByIdAndUpdate(id, name, age);
  return result;
};
export const findByIdAndDelete = async (id) => {
  const result = await userRepo.findByIdAndDelete(id);
  return result;
};
export const createUser = async (email, password, name, age) => {
  const userId = await userRepo.createUser(email, password, name, age);
  return userId;
};
export const getAllEmails = async () => {
  const result = await userRepo.getAllEmails();
  return result;
};
export const findEmail = async (email) => {
  const user = await userRepo.findEmail(email);
  return user;
};

const userService = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createUser, getAllEmails, findEmail,
};

export default userService;
