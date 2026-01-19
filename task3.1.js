const temperatures = [32, 35, 28, 40, 38, 30, 42];
    // 1. filter() temperatures above 35
let res1=temperatures.filter((e)=>e>35)
console.log(res1)
    // 2. map() to convert all temperatures from Celsius → Fahrenheit
let res2=temperatures.map((e)=>(((9/5)*e)+32))
console.log(res2)
    // 3. reduce() to calculate average temperature
let res3=(temperatures.reduce((acc,ele)=>acc+=ele))/temperatures.length
console.log(res3)
    // 4. find() first temperature above 40
let res4=temperatures.find((e)=>e>40)
console.log(res4)
    // 5. findIndex() of temperature 28
let res5=temperatures.findIndex((e)=>e==28)
console.log(res5)





