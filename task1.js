function gst(x){
    return (x/100)*18
}

let totalAmount=0
// 1. Add ₹500 to the total
totalAmount+=500
//   2. Add ₹1200 to the total
totalAmount+=1200
//   3. Apply a ₹200 discount
totalAmount-=200
//   4. Add 18% GST
totalAmount+=gst(totalAmount)
//   5. Print the final bill amount
console.log(totalAmount)






