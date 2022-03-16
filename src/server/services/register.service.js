import emailsRepo from '../repositories/user.repository';

export const getAllEmails = async () => {
  const result = await emailsRepo.getAllEmails();
  return result;
};
export const findEmail = async (email) => {
  const user = await emailsRepo.findEmail(email);
  return user;
};
export const createToken = async (email, password) => {
  // Encrypt user password
  encryptedPassword = await bcrypt.hash(password, 10);

  // Create user in our database
  const user = await userService.createUser({
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    password: encryptedPassword,
    name,
    age,
  });

  // Create token
  const token = jwt.sign(
    { id, email },
    process.env.TOKEN_KEY,
    {
      expiresIn: '2h',
    },
  );
};

const registerService = {
  getAllEmails, findEmail, createToken,
};

export default registerService;
