import { DataTypes } from "sequelize";

import sequelize from "../database/connection";

const Log = sequelize.define(
  "Log",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    route: {
      type: DataTypes.STRING,
    },
    method: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "logs",
    timestamps: false,
  }
);

export default Log;
