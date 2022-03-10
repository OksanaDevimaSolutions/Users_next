import userRepo from '../repositories/user.repository';

export const getOneById = (id) => userRepo.getOneById(id);
export const getAll = () => userRepo.getAll();
export const findByIdAndUpdate = (id, name, age) => userRepo.findByIdAndUpdate(id, name, age);
export const findByIdAndDelete = (id) => userRepo.findByIdAndDelete(id);
export const createUser = (name, age) => userRepo.createUser(name, age);

const userService = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createUser,
};

export default userService;
