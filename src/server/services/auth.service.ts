import bcrypt from "bcryptjs";

import emailService from "./email.service";
import tokenService from "./token.service";
import userService from "./user.service";

const createUser = async (email, password, name, age) => {
  // check if user already exist
  const oldUser = await userService.findEmail(email);
  if (oldUser) {
    throw new Error(`User ${email} already exists`);
  }
  // Encrypt user password
  const encryptedPassword = await bcrypt.hash(password, 10);

  const uniqueString = await emailService.createUniqueString();

  // Create user in our database
  const user = await userService.createUser(
    email,
    encryptedPassword,
    name,
    age,
    uniqueString
  );

  await emailService.sendEmail(email, uniqueString);

  return user;
};

const authorizeUser = async (email, password) => {
  const user = await userService.findEmail(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = await tokenService.createToken({
      userId: user.id,
      email,
    });
    return token;
  } else {
    throw new Error(`User ${email} doesn't exists or password is incorrect`);
  }
};

const authService = { createUser, authorizeUser };
export default authService;
