import type { Model, Optional } from "sequelize/types";

// We recommend you declare an interface for the attributes, for stricter typechecking
export interface UserAttributes {
  id: number;
  email: string;
  password: string;
  uniqueString: string;
  isConfirmed: boolean;
  name: string;
  age: number;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
export type UserCreationAttributes = Optional<UserAttributes, "id">;

// We need to declare an interface for our model that is basically what our class would be
export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}
