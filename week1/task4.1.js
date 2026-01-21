const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//1.Use filter() to get only inStock products
let res1=cart.filter((e)=>e.inStock)
console.log(res1)

//2.Use map() to create a new array with:  { name, totalPrice }
let res2=cart.map((e)=>{
    return{
        name:e.name,
        totalPrice:e.price
    }
})
console.log(res2)

//3.Use reduce() to calculate grand total cart value
let res3=cart.reduce((acc,ele)=>{
    if(typeof acc==='object' && acc.inStock)
        return (acc.price*acc.quantity)+(ele.quantity+ele.price)
    else if(ele.inStock) return acc+ele.price*ele.quantity

    return acc
},0)
console.log(res3)

//4.Use find() to get details of "Mouse"
let res4=cart.find((e)=>e.name==='Mouse')
console.log(res4)

//5.Use findIndex() to find the position of "Keyboard"
let res5=cart.findIndex((e)=>e.name==='Keyboard')
console.log(res5)