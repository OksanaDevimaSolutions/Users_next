import Product from "../models/Product.models";
import User from "../models/User.models";

const getOneById = async (id: number) => {
  const user = await User.findOne({
    where: {
      id,
    },
    attributes: ["id", "email", "name", "age"],
    include: {
      model: Product,
      attributes: ["id", "title", "price"],
    },
    order: [
      ["id", "DESC"],
      [Product, "title", "ASC"],
      [Product, "id", "ASC"],
    ],
  });
  if (user) {
    return user;
  }

  return null;
};
const getAll = async () => {
  const users = await User.findAll({
    attributes: ["id", "email", "name", "age"],
    include: {
      model: Product,
      attributes: ["id", "title", "price"],
    },
    order: [
      ["id", "DESC"],
      [Product, "title", "ASC"],
      [Product, "id", "ASC"],
    ],
  });
  return users;
};

const findByIdAndUpdate = async (id: number, name: string, age: number) => {
  const countUpdated = await User.update(
    { name, age },
    {
      where: {
        id,
      },
    }
  );
  return countUpdated[0] > 0;
};

const findByIdAndDelete = async (id: number) => {
  const countDeleted = await User.destroy({
    where: {
      id,
    },
  });

  return countDeleted > 0;
};
const createUser = async (
  email: string,
  password: string,
  name: string,
  age: number,
  uniqueString: string
) => {
  const newUser = await User.create({
    email,
    password,
    name,
    age,
    uniqueString,
  });

  return newUser;
};
const getAllEmails = async () => {
  const users = await User.findAll({
    attributes: ["email"],
  });
  return users;
};
const findEmail = async (email: string) => {
  const user = await User.findOne({
    where: {
      email,
      isConfirmed: true,
    },
  });
  if (user) {
    return user;
  }

  return null;
};
const findByUniqueStringAndConfirm = async (uniqueString: string) => {
  const user = await User.findOne({
    where: {
      uniqueString,
    },
  });
  if (user) {
    const countUpdated = await User.update(
      { isConfirmed: true },
      {
        where: {
          id: user.id,
        },
      }
    );
    return countUpdated[0] > 0;
  }

  return null;
};

const userRepository = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createUser,
  getAllEmails,
  findEmail,
  findByUniqueStringAndConfirm,
};

export default userRepository;
