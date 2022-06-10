/**
 * Array.prototype.filter는 인자로 전달하는 콜백함수의 반환값이 true으로 구성된 배열을 반환한다.
 * 원본 배열은 유지된다~
 */

const numbers = [1, 2, 3, 4, 5];

const odds = numbers.filter(v => v % 2);

const evens = numbers.filter(v => !(v % 2));

console.log('홀수', odds);  // [1, 3, 5]
console.log('짝수', evens); // [2, 4]

class User {
    constructor() {
        this.users = [
            {id : 1, name : 'Choi'},
            {id : 2, name : 'Kim'}
        ]
    }

    findById(id) {
        return this.users.filter(obj => obj['id'] === id);
    }

    remove(id) {
        this.users = this.users.filter(obj => obj['id'] !== id);
    }
}

const users = new User();
// id가 1인 사용자를 반환한다.
let user = users.findById(1);
console.log(user);

// id가 1인 사용자를 제거한다.
users.remove(1);

user = users.findById(1);
console.log(user);

/*
    Array.prototype.filter의 경우 요소를 찾거나, 삭제하기 위해서 사용되는 경우도 있음.
*/

// 배열 요소의 중복 제거
const numbers2 = [1, 2, 1, 2, 3, 4, 3, 5];
console.log(numbers2.filter((value, index, array) => {
    console.log(value, index, array.indexOf(value))
    return index === array.indexOf(value);
}));