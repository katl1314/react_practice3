interface Todo{
    id : number;
    name : string;
    completed : boolean;
}

let todos : Todo[] = [];

function addTodo(todo:Todo){
    todos = [...todos, todo]
}

let todo : Todo = {
    id : 1,
    name : "최민혁",
    completed : true
}

addTodo(todo);

