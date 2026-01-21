 import {addTask,getAllTasks,completeTask} from './task.js';
                  // Test your module system
                  // 1. Add some tasks
let result1=addTask('Eat','high','2026-04-22')
let result2=addTask('Sleep','high','2026-04-12')
                  // 2. Display all tasks
console.log(getAllTasks())
                  // 3. Complete a task
completeTask(1)
                  // 4. Display all tasks again
console.log(getAllTasks())