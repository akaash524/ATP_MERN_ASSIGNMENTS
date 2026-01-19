function CoursePriceTag(price){
    //    1. If price < 500 → "Budget Course"
    if(price<500) return "Budget Course"
    //    2. If price between 500–1000 → "Standard Course"
    else if(price>=500 && price<100) return "Standard Course"
    //    3. If price > 1000 → "Premium Course"
    else return "Premium Course"
}

let price=1200
//    4. Store label in courseTag
let courseTag=CoursePriceTag(price)
//    5. Print the label
console.log(courseTag)






