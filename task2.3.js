let hasPaid = true;
let hasCompletedBasics = false;
let enrollMessage
//    1. If both conditions are true → "Enroll Now"
//    2. Otherwise → "Complete Requirements"
//    3. Use ternary operator
//    4. Store result in enrollMessage
(hasPaid&&hasCompletedBasics)?enrollMessage="Enroll Now":enrollMessage="Complete Requirements"
console.log(enrollMessage)
//    5. Print message