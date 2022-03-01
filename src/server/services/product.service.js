import productRepo from '../repositories/product.repository'

export const getOneById=(id)=>{
    return productRepo.getOneById(id)
}
export const getAll=()=>{
    return productRepo.getAll()
}
export const findByIdAndUpdate=(id,title,price,user_id)=>{
    return productRepo.findByIdAndUpdate(id,title,price, user_id)
}
export const findByIdAndDelete=(id)=>{
    return productRepo.findByIdAndDelete(id)
}
export const createProduct=(title,price,user_id)=>{
    return productRepo.createUser(title,price,user_id)
}


const productService = {getOneById,getAll,findByIdAndUpdate, findByIdAndDelete, createProduct}

export default productService