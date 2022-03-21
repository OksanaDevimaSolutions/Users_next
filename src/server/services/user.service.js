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
export const createUser = async (email, password, name, age, uniqueString) => {
  const user = await userRepo.createUser(email, password, name, age, uniqueString);
  return user;
};
export const getAllEmails = async () => {
  const result = await userRepo.getAllEmails();
  return result;
};
export const findEmail = async (email) => {
  const user = await userRepo.findEmail(email);
  return user;
};
export const findUniqueString = async (uniqueString) => {
  const user = await userRepo.findUniqueString(uniqueString);
  return user;
};
export const addConfirmation = async (id) => {
  const result = await userRepo.addConfirmation(id);
  return result;
};
export const addToken = async (id, token) => {
  const result = await userRepo.addToken(id, token);
  return result;
};

const userService = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createUser,
  getAllEmails,
  findEmail,
  findUniqueString,
  addConfirmation,
  addToken,
};

export default userService;
