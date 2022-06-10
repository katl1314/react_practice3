const todos = [
    {id : 4, content: 'Javascript'},
    {id : 1, content: 'HTML'},
    {id : 2, content: 'CSS'},
];


const compare = (key) => {
    return (a, b) => {
        return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
    }
}

console.log(todos.sort(compare('content')));

