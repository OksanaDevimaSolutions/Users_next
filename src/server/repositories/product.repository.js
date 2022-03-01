import sequelize from '../database/connection'
import Product from '../models/Product.models'


export const getOneById =async (id) => {
    return Product.find((item) => item.id == id)
}
export const getAll = async () => { 
     const products = await sequelize.query('SELECT * FROM products')    
     return products[0]
}

export const findByIdAndUpdate = async (id, title, price, user_id) => {

    const countUpdated = await Product.update({ title: title, price:price,user_id:user_id }, {
        where: {
            id: id
        }
    });
    if (countUpdated > 0)
    return true
return false

}
export const findByIdAndDelete =async (id) => {

    const countDeleted = await Product.destroy({
        where: {
            id: id
        }
    });
    if (countDeleted > 0)
        return true
    return false

}
export const createProduct = async (title, price,user_id) => {
    const newProduct = await Product.create({ title: title, price: price, user_is:user_id });
    return newProduct.id
}
const productRepository = { getOneById, getAll, findByIdAndUpdate, findByIdAndDelete, createProduct }

export default productRepository