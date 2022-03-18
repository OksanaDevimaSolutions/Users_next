// import sequelize from '../database/connection';
import User from '../models/User.models';
import Product from '../models/Product.models';

// const users = [
//     {
//         id: 1,
//         name: "John",
//         age: 23
//     },
//     {
//         id: 2,
//         name: "Peter",
//         age: 34
//     },
//     {
//         id: 3,
//         name: "Anna",
//         age: 45
//     }
// ]
export const getOneById = async (id) => {
  const user = await User.findAll({
    where: {
      id,
    },
  });
  if (user[0]) {
    return user[0];
  }

  return false;
};
export const getAll = async () => {
  //  const users = await sequelize.query('SELECT users.id, name, age,
  // products.title, products.price FROM products INNER JOIN users ON products.user_id=users.id')

  const users = await User.findAll({
    attributes: ['id', 'name', 'age'],
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

  // const index= users.findIndex((item=>item.id==id))
  // if (index!=-1){
  //     users.splice(index,1, {id:id, name:name,age:age})
  //     return users
  // }
  // return false
};

export const findByIdAndDelete = async (id) => {
  // const index= users.findIndex((item=>item.id==id))
  // if (index!=-1){
  //     users.splice(index,1)
  //     return true
  // }
  // return false
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
export const createUser = async (name, age) => {
  const newUser = await User.create({ name, age });
  // users.push({id:users.length+1,name:name,age:age})
  // return users.find((item)=>item.id==users.length)

  return newUser.id;
};
const userRepository = {
  getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createUser,
};

export default userRepository;
