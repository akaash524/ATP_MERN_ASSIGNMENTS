
let isLoggedIn=true
let isProfileComplete=false
//    4. Store the result in message
let message
//    1. If user is not logged in → show "Please login"
if(!isLoggedIn) message='Please Login'
//    2. If logged in but profile incomplete → show "Complete your profile"
else if(isLoggedIn&&!isProfileComplete) message='Complte your profile'
//    3. If logged in and profile complete → show "Welcome back!"
else if(isLoggedIn && isProfileComplete) message='Welcome Back'
//    5. Print the message
console.log(message)






