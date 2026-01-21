 // 1. Validate task title (not empty, min 3 chars)
    function validateTitle(title) {
        if(title.length===0)
            return 'Invalid title Cannot be empty'
        else if(title.length<3)
            return 'Length must be greater than 3'
        return true
    }
    // 2. Validate priority (must be: low, medium, high)
    function validatePriority(priority) {
        if(priority!=='low' && priority!=='high' && priority!=='medium')
            return false
        return true
    }
    // 3. Validate due date (must be future date)
    function validateDueDate(date) {
        let currdate=new Date()
        return new Date(date)>currdate
    }

export { validateDueDate , validatePriority , validateTitle};