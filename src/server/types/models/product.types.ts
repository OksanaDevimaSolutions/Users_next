import type { Model, Optional } from "sequelize/types";

export interface ProductAttributes {
  id: number;
  title: string;
  price: number;
  userId: number;
}

export type ProductCreationAttributes = Optional<ProductAttributes, "id">;

export interface ProductInstance
  extends Model<ProductCreationAttributes, ProductCreationAttributes>,
    ProductAttributes {}
