const users = [
    {id : 1, name : 'Kim'},
    {id : 2, name : 'Lee'},
    {id : 2, name : 'Choi'},
    {id : 3, name : 'Park'},
]

console.log(users.find(value => value.id == 2)); // 조건이 true인 첫번째 요소를 반환한다.
console.log(users.findIndex(value => value.id == 2));   // 조건이 true인 첫번째 요소의 index를 반환한다.