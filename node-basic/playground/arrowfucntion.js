const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasks:()=>{
        const incomplete = tasks.tasks.filter(task=>{
            return (task.completed === false)
        })
        return incomplete
    }
}

console.log(tasks.getTasks())


