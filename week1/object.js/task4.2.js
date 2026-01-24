const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
  //   1. filter() students who passed (marks ≥ 40)
let res1=students.filter((e)=>e.marks>=40)
console.log(res1)
  //   2. map() to add a grade field
  //             ≥90 → A
  //             ≥75 → B
  //             ≥60 → C
  //             else → D

let res2=students.map((e)=>{
  if(e.marks>=90) return {...e,grade:'A'}
  else if(e.marks>=75) return {...e,grade:'B'}
  else if(e.marks>=60) return {...e,grade:'C'}
  else return {...e,grade:'D'}
})
console.log(res2)

  //  3. reduce() to calculate average marks
  let res3=students.reduce((acc,res)=>{
      acc+=+res.marks
      return acc
  },0)
  console.log(res3)
  //  4. find() the student who scored 92
  let res4=students.find((e)=>e.marks==92)
  console.log(res4)
  //  5. findIndex() of student "Kiran"
  let res5=students.findIndex((e)=>e.name==='Kiran')
  console.log(res5)


