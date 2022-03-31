import { DataTypes } from "sequelize";

import sequelize from "../database/connection";

import Product from "./Product.models";

import type { ProductImagesInstance } from "../types/models/productImages.types";

const ProductImages = sequelize.define<ProductImagesInstance>(
  "ProductImages",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      field: "product_id",
      references: {
        model: Product,
        key: "id",
      },
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    tableName: "productImages",
    timestamps: false,
  }
);

Product.hasMany(ProductImages, { foreignKey: "productId" });
ProductImages.belongsTo(Product, { foreignKey: "productId" });

export default ProductImages;
