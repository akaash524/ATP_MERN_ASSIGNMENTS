const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
// 1. filter() only "Sci-Fi" movies
let res1=movies.filter((e)=>e.genre==='Sci-Fi')
console.log(res1)
//     2. map() to return:
//             "Inception (8.8)"
let res2=movies.map((e)=>{
   return `${e.title} ${e.rating}`
})
console.log(res2)
//     3. reduce() to find average movie rating
let res3=movies.reduce((acc,res)=>{
    return acc+=res.rating
},0)/movies.length
console.log(res3)
//     4. find() movie "Joker"
let res4=movies.find((e)=>e.title==='Joker')
console.log(res4)
//     5. findIndex() of "Avengers"
let res5=movies.findIndex((e)=>e.title==='Avengers')
console.log(res5)
