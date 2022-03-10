import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
// import Product from './Product.models'
// const {DataTypes} = require('sequelize')

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
}, {
  // Other model options go here
  tableName: 'users',
  timestamps: false,
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// User.sync()
//  sequelize.sync({ force: true });

export default User;
