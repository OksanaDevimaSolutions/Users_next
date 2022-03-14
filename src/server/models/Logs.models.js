import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Logs = sequelize.define('Log', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  route: {
    type: DataTypes.STRING,
  },
  body: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'logs',
  timestamps: false,
});

export default Logs;
