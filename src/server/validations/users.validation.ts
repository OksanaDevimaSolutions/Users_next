import * as yup from "yup";

const schemaId = yup.object().shape({
  id: yup.number().positive().integer().required(),
});
const schemaUserEdit = yup.object().shape({
  name: yup.string().trim().min(3),
  age: yup.number().integer().positive().min(18, "Minimum age is 18").max(100),
});
const schemaUserValidation = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().required(),
  name: yup.string().trim().min(3),
  age: yup.number().integer().positive().min(18, "Minimum age is 18").max(100),
});
const schemaEmailPassword = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().required(),
});

const yupValidation = {
  schemaId,
  schemaUserEdit,
  schemaUserValidation,
  schemaEmailPassword,
};

export default yupValidation;
