import * as yup from 'yup';

// export const setLocale = yup.setLocale({
//   mixed: {
//     default: 'field_invalid',
//   },
//   number: {
//     min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
//     max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
//   },
// });
export const schemaId = yup.object().shape({
  id: yup.number().positive().integer().required(),
});
export const schemaUserEdit = yup.object().shape({
  name: yup.string().min(3),
  age: yup.number().integer().positive().min(18, 'Minimum age is 18')
    .max(100),
});
export const schemaEmailPassword = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const yupValidation = {
  schemaId, schemaUserEdit, schemaEmailPassword,
};

export default yupValidation;
