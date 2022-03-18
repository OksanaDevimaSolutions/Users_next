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
export const createUser = async (name, age) => {
  const userId = await userRepo.createUser(name, age);
  return userId;
};

const userService = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createUser,
};

export default userService;
