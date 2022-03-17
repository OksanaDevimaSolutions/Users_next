import User from '../models/User.models';
import Product from '../models/Product.models';

export const getOneById = async (id) => {
  const user = await User.findAll({
    where: {
      id,
    },
    attributes: ['id', 'email', 'name', 'age'],
    include: {
      model: Product,
      attributes: ['id', 'title', 'price'],
    },
    order: [
      ['id', 'DESC'],
      [Product, 'title', 'ASC'],
      [Product, 'id', 'ASC'],
    ],
  });
  if (user[0]) {
    return user[0];
  }

  return null;
};
export const getAll = async () => {
  const users = await User.findAll({
    attributes: ['id', 'email', 'name', 'age'],
    include: {
      model: Product,
      attributes: ['id', 'title', 'price'],
    },
    order: [
      ['id', 'DESC'],
      [Product, 'title', 'ASC'],
      [Product, 'id', 'ASC'],
    ],
  });
  // console.log(users[0])
  return users;
};

export const findByIdAndUpdate = async (id, name, age) => {
  const countUpdated = await User.update({ name, age }, {
    where: {
      id,
    },
  });

  if (countUpdated > 0) {
    return true;
  }

  return false;
};

export const findByIdAndDelete = async (id) => {
  const countDeleted = await User.destroy({
    where: {
      id,
    },
  });

  if (countDeleted > 0) {
    return true;
  }

  return false;
};
export const createUser = async (email, password, name, age) => {
  const newUser = await User.create({
    email, password, name, age,
  });

  return newUser;
};
export const getAllEmails = async () => {
  const users = await User.findAll({
    attributes: ['email'],
  });
  return users;
};
export const findEmail = async (email) => {
  const user = await User.findAll({
    where: {
      email,
    },
  });
  if (user[0]) {
    return user[0];
  }

  return null;
};
export const addToken = async (id, token) => {
  const countUpdated = await User.update({ token }, {
    where: {
      id,
    },
  });
  if (countUpdated > 0) {
    return true;
  }
  return false;
};

const userRepository = {
  getOneById,
  getAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  createUser,
  getAllEmails,
  findEmail,
  addToken,
};

export default userRepository;
