import { validateDueDate , validatePriority , validateTitle} from './validator.js';
const tasks = [];
                    
// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    if(validateTitle(title)==true){
        if(validatePriority(priority)){
            if(validateDueDate(dueDate)){
                // If valid, add to tasks array
                tasks.push({'id':tasks.length+1,'title':title,'priority':priority,'dueDate':dueDate,'progress':'incomplete'})
                return 'Successfully Added'
            }
            console.log('Invalid Due Date')
        }
        console.log('Invalid Priority')
    }
    console.log('Error :',validateTitle(title))
    // Return success/error message
}
// 
// console.log(tasks)
// 2. Get all tasks
function getAllTasks() {
    // Return all tasks
    return tasks
}

// 3. Mark task as complete
function completeTask(taskId) {
    // Find task and mark as complete
    for(let task of tasks){
        if(task.id==taskId)
            task.progress='complete'

    }
}


export {addTask,getAllTasks,completeTask};