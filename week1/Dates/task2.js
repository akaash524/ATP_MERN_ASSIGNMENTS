let enrollmentDeadline = new Date("2026-01-20");
// 1.Check if:
//       * Today is before deadline → "Enrollment Open"
let date=new Date()
console.log(date>enrollmentDeadline?'Enrollment Closed':'Enrollment Open')
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
let userDate=new Date(2026,2,30)
month=userDate.getMonth()
year=userDate.getFullYear()
let temp=new Date(year,month,0)
console.log(temp.getDate()>=userDate.getDate()?'Valid date':'Invaid date')
//       * Detect whether the date is valid or invalid
