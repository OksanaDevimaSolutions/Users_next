import sequelize from '../database/connection'
import User from '../models/User.models'

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
export const getOneById =async (id) => {
    return users.find((item) => item.id == id)
}
export const getAll = async () => {
    // User.init({
    //     // Model attributes are defined here
    //     id: {
    //       type: DataTypes.INTEGER,
    //       autoIncrement: true,
    //       primaryKey: true
    //     },
    //     name: {
    //       type: DataTypes.STRING,
    //       allowNull: false
    //     },
    //     age: {
    //       type: DataTypes.INTEGER
    //       // allowNull defaults to true
    //     }
    //   }, {
    //     // Other model options go here
    //     sequelize, // We need to pass the connection instance
    //     modelName: 'User' // We need to choose the model name
    //   });
    // const jane = await User.create({ name: "Jane", age: 12 });
     const users2 = await sequelize.query('SELECT * FROM users')
    // // const users2= await sequelize.findAll()
     return users2[0]
  //  return jane;
}

export const findByIdAndUpdate = async (id, name, age) => {

    const countUpdated = await User.update({ name: name, age:age }, {
        where: {
            id: id
        }
    });
    if (countUpdated > 0)
    return true
return false

    // const index= users.findIndex((item=>item.id==id))
    // if (index!=-1){
    //     users.splice(index,1, {id:id, name:name,age:age})
    //     return users
    // }
    // return false
}
export const findByIdAndDelete =async (id) => {
    // const index= users.findIndex((item=>item.id==id))
    // if (index!=-1){
    //     users.splice(index,1)
    //     return true
    // }
    // return false
    const countDeleted = await User.destroy({
        where: {
            id: id
        }
    });
    if (countDeleted > 0)
        return true
    return false

}
export const createUser = async (name, age) => {
    const newUser = await User.create({ name: name, age: age });
    //users.push({id:users.length+1,name:name,age:age})
    //return users.find((item)=>item.id==users.length)
    return newUser.id
}
const userRepository = { getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createUser }

export default userRepository