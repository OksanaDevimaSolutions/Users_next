import userRepo from "../repositories/user.repository";

const getOneById = async (id: number) => {
  const user = await userRepo.getOneById(id);
  return user;
};
const getAll = async () => {
  try {
    const result = await userRepo.getAll();
    return result;
  } catch (err) {
    return `Can't load products error:\n ${err.message}`;
  }
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
const findByUniqueString = async (uniqueString: string) => {
  const user = await userRepo.findByUniqueString(uniqueString);
  return user;
};
const addConfirmation = async (id: number) => {
  const result = await userRepo.addConfirmation(id);
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
};

export default userService;
