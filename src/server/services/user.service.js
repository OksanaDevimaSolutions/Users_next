import userRepo from '../repositories/user.repository'

export const getOneById=(id)=>{
    return userRepo.getOneById(id)
}
export const getAll=()=>{
    return userRepo.getAll()
}
export const findByIdAndUpdate=(id,name,age)=>{
    return userRepo.findByIdAndUpdate(id,name, age)
}
export const findByIdAndDelete=(id)=>{
    return userRepo.findByIdAndDelete(id)
}
export const createUser=(name,age)=>{
    return userRepo.createUser(name,age)
}


const userService = {getOneById,getAll,findByIdAndUpdate, findByIdAndDelete, createUser}

export default userService