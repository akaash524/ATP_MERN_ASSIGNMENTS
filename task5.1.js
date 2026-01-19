const user={
    id:101,
    name:'jd',
    email:"ravi@gmail.com",
    role:'student',
    isActive:true
};
//  1. Read and print the user’s name and email
console.log("Username :",user.name,"Email:",user.email);
//     2. Add a new property lastLogin: "2026-01-01"
user.lastLogin='2026-01-01'
//     3. Update role from "student" to "admin"
user.role='admin'
//     4. Delete the isActive property
delete user.isActive
//     5. Use Object.keys() to list all remaining fields
console.log(Object.keys(user))