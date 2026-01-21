import {users,courses,cart,roles} from './data.js';
// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
let allRoles=Object.keys(roles)
console.log(allRoles)
//   -> Check if student can delete
let check=roles.student.find((e)=>e==='delete')
console.log(typeof(check)==='undefined'?'No Delete Permission':'Delete Permission Allowd')
//   -> Create a flat list of all unique permissions
let allPermisions=roles.admin
console.log(allPermisions)
//   -> Add new role moderator immutably
let updatedRoles=roles
updatedRoles.moderator=['update','delete']
console.log(updatedRoles)