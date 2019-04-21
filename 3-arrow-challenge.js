const task = {
    task:[
        {text:'Grocery shopping',
        completed:true},
        {
            text: 'Clean yard',
            completed:false
        },
        {
            text:'Film course',
            completed:false
        }
    ],
    getTaskToDo(){
        return this.task.filter((task)=>{
            return task.completed === false
        })
    }
}

console.log(task.getTaskToDo())