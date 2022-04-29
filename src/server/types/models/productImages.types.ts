import type { Model, Optional } from "sequelize/types";

export interface ProductImagesAttributes {
  id: number;
  productId: number;
  image: string;
}

export type ProductImagesCreationAttributes = Optional<
  ProductImagesAttributes,
  "id"
>;

export interface ProductImagesInstance
  extends Model<
      ProductImagesCreationAttributes,
      ProductImagesCreationAttributes
    >,
    ProductImagesAttributes {}
