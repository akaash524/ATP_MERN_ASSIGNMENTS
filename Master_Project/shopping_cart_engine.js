import { users,courses,cart,roles } from "./data.js";
// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
let newCart=[]
for(let course of courses){
    for(let item of cart){
        if(course.id===item.courseId){
           newCart.push({...course,qty:item.qty})  
        }
    }
}
console.log(newCart)
//   -> Calculate total cart amount
let totalAmount=newCart.reduce((acc,ele)=>{
    return acc+=(ele.price*ele.qty)
},0)
console.log(totalAmount)
//   -> Increase quantity of a course (immutably)
let newCourses=newCart.map((e)=>{
    if(e.id===101){
        return{...e,qty:5}
    }
    return e
})
console.log(newCourses)
//   -> Remove a course from cart
let updatedCart=newCart.filter((e)=>e.id!==101)
console.log(updatedCart)
//   -> Check if all cart items are paid courses
let unpaidCourse=newCart.find((e)=>e.price===0)
console.log(typeof(unpaidCourse)==='undefined'?'All are paid courses':unpaidCourse)