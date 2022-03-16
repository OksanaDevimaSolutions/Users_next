// import { postgresMd5PasswordHash } from 'pg/lib/utils';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    // set(value) {
    //   this.setDataValue('password', postgresMd5PasswordHash(this.email + value));
    // },
  },
  token: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
}, {
  tableName: 'users',
  timestamps: false,
});

export default User;
