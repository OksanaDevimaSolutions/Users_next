import * as yup from 'yup';


export const schemaId = yup.object().shape({
    id: yup.number().positive().integer().required()
});
export const schemaUserEdit = yup.object().shape({
    name: yup.string().min(3),
    age: yup.number().min(18).max(100).positive().integer()
});

const yupValidation = {schemaId,schemaUserEdit}

export default yupValidation