//  1. Create a Date object for current date & time.
let date=new Date()
//        2. Extract and display:
//                     * Year
year=(date.getFullYear())
console.log(year)
//                     * Month (human readable)
month=date.getMonth()+1
console.log(month)
//                     * Date
rdate=date.getDate()
console.log(rdate)
//                     * Day of week
day=date.getDay()
//                     * Hours, minutes, seconds
let hrs=date.getHours()
let min=date.getMinutes()
let sec=date.getSeconds()
console.log(hrs,min,sec)
  // 3. Display the date in this format:
                  //  DD-MM-YYYY HH:mm:ss
console.log(day,'-',month,'-',year,hrs,':',min,':',sec)

