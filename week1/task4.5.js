const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//  1. filter() all credit transactions
let res1=transactions.filter((e)=>e.type==="credit")
console.log(res1)
//     2. map() to extract only transaction amounts
let res2=transactions.map((e)=>e.amount)
console.log(res2)
//     3. reduce() to calculate final account balance
let res3=transactions.reduce((acc,res)=>{
    return acc+=res.amount
},0)
console.log(res3)
//     4. find() the first debit transaction
let res4=transactions.find((e)=>e.type==='debit')
console.log(res4)
//     5. findIndex() of transaction with amount 10000
let res5=transactions.findIndex((e)=>e.amount===10000)
console.log(res5)