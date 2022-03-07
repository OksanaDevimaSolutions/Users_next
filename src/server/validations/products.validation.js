import * as yup from 'yup';


export const schemaId = yup.object().shape({
    id: yup.number().positive().integer()
});
export const schemaProductEdit = yup.object().shape({
    title: yup.string().min(2).max(255),
    price: yup.number().positive(),
    user_id: yup.number().positive().integer()
});

const yupValidation = {schemaId,schemaProductEdit}

export default yupValidation