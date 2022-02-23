const users= [
    {
    id:1,
    name:"John",
    age:23
},
    {
    id:2,
    name:"Peter",
    age:34
},
    {
    id:3,
    name:"Anna",
    age:45
},
]
export const getOneById=(id)=>{
    return users.find((item)=>item.id==id)
}
export const getAll=()=>{
    return users
}
export const findByIdAndUpdate=(id, name,age)=>{

    const index= users.findIndex((item=>item.id==id))
    if (index!=-1){
        users.splice(index,1, {id:id, name:name,age:age})
        return users
    }
    return false
}
export const findByIdAndDelete=(id)=>{

    const index= users.findIndex((item=>item.id==id))
    if (index!=-1){
        users.splice(index,1)
        return true
    }
    return false
}
export const createUser=(name,age)=>{
users.push({id:users.length+1,name:name,age:age})

return users.find((item)=>item.id==users.length)
}
const userRepository = {getOneById,getAll,findByIdAndUpdate, findByIdAndDelete, createUser}

export default userRepository