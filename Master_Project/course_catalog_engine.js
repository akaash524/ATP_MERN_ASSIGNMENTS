// MODULE 2: COURSE CATALOG ENGINE
import { users,courses,cart,roles } from "./data.js";
//   -> Get published courses
let publishedCourses=courses.filter((e)=>e.published)
console.log(publishedCourses)
//   -> Sort courses by price (high → low)
const sortedCourses=[...courses]
for(let i=0;i<sortedCourses.length;i++){
    for(let j=i+1;j<sortedCourses.length;j++){
        if(sortedCourses[i].price<sortedCourses[j].price)
            [sortedCourses[i],sortedCourses[j]]=[sortedCourses[j],sortedCourses[i]]
    }
}

console.log(sortedCourses)
//   -> Extract { title, price } only
let extractedData=courses.map((e)=>{
    return{
        'title':e.title,
        'price':e.price
    }
})
console.log(extractedData)
//   -> Calculate total value of published courses
let totalValue=courses.reduce((acc,ele)=>{
    return acc+=ele.price
},0)
console.log(totalValue)
//   -> Add a new course immutably
let newCourses=[...courses]
newCourses.push({
    id:104,
    title:'MongoDB',
    price:2500,
    published:true
})
console.log(newCourses)