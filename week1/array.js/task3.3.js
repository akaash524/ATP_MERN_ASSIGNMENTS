const marks = [78, 92, 35, 88, 40, 67];
//  1. filter() marks ≥ 40 (pass marks)
console.log(marks.filter((e)=>e>=40))
//     2. map() to add 5 grace marks to each student
console.log(marks.map((e)=>e+5))
//     3. reduce() to find highest mark
console.log(marks.reduce((acc,ele)=>acc>ele?acc:ele))
//     4. find() first mark below 40
console.log(marks.find((e)=>e<40))
//     5. findIndex() of mark 92
console.log(marks.findIndex((e)=>e==92))





