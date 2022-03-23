import userRepo from '../repositories/user.repository';

export const getOneById = async (id:number) => {
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
export const findByIdAndUpdate = async (id:number, name:string, age:number) => {
  const result = await userRepo.findByIdAndUpdate(id, name, age);
  return result;
};
export const findByIdAndDelete = async (id:number) => {
  const result = await userRepo.findByIdAndDelete(id);
  return result;
};
export const createUser = async (email:string, password:string, name:string, age:number, uniqueString:string) => {
  const user = await userRepo.createUser(email, password, name, age, uniqueString);
  return user;
};
export const getAllEmails = async () => {
  const result = await userRepo.getAllEmails();
  return result;
};
export const findEmail = async (email:string) => {
  const user = await userRepo.findEmail(email);
  return user;
};
export const findByUniqueString = async (uniqueString:string) => {
  const user = await userRepo.findByUniqueString(uniqueString);
  return user;
};
export const addConfirmation = async (id:number) => {
  const result = await userRepo.addConfirmation(id);
  return result;
};
export const addToken = async (id:number, token:string) => {
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
  findByUniqueString,
  addConfirmation,
  addToken,
};

export default userService;
