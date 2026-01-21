import {users,courses,cart,roles} from './data.js';
// -> Get only active users
let activeUsers=users.filter((e)=>e.active)
console.log(activeUsers)
//   -> Extract names of active users
let names=activeUsers.map((e)=>e.name)
console.log(names)
//   -> Check if any admin exists
console.log(activeUsers.find((e)=>e.role==='admin'))
//   -> Find user by id
let id=1;
console.log(users.find((e)=>e.id=id))
//   -> Deactivate a user immutably
let newUsers=users.map((e)=>{
    return{
        ...e,
        active:false
    }
})
console.log(newUsers)