const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};
//  1. Create a shallow copy of user
const userCopy={...user,name:user.name+'omg'};
// 2. Change:
// i. name in the copied object
//userCopy.name="Ramu"
// ii. preferences.theme in the copied object
userCopy.preferences.theme='light'
// iii .Log both original and copied objects
console.log(user,userCopy)
// iv. Observe what changes and what doesn’t


