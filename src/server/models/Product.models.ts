import { DataTypes } from "sequelize";

import sequelize from "../database/connection";

import User from "./User.models";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    // Other model options go here
    tableName: "products",
    timestamps: false,
  }
);

User.hasMany(Product, { foreignKey: "userId" });
Product.belongsTo(User, { foreignKey: "userId" });

export default Product;
