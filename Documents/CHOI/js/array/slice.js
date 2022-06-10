/**
 * Array.prototype.slice() 인수로 전달된 범위의 요소들을 복사하여 배열로 반환된다.
 * 원본 배열에는 변경되지 않으나, splice와 비슷하기 때문에 주의해야함.
 * Array.prototype.slice(startIndex, endIndex) // startIndex ~ endIndex - 1
 */

var array = [1, 2, 3, 4, 5];
console.log(array.slice(0, 1));     // [1]
console.log(array.slice(1, 2));     // [2]
console.log(array.slice(1, 4));     // [2, 3, 4]

var copied = array.slice();         // array배열 복사본 
console.log('copied', copied);      // [1, 2, 3, 4, 5]

// 인수가 음수이면 배열의 끝부터 복사하여 배열로 반환한다.
console.log('copied.slice(-1)', copied.slice(-1));  // [5]
console.log('copied.slice(-2)', copied.slice(-2));  // [4, 5]
console.log('copied.slice(-3)', copied.slice(-3));  // [3, 4, 5]

console.log(Array.of(1, 2, 3));

function sum() {
    console.log(Array.from(arguments));
}

sum(1, 2, 3, 4, 5);

let result = Array.from({length : 3}, (_, i) => i);
console.log(result);

const tools = [
    {id : 1, content : 'HTML', completed : false},
    {id : 2, content : 'CSS', completed : true},
    {id : 3, content : 'Javascript', completed : false},
];

const copied2 = tools.slice();  // 얕은 복사

console.log('copied2', copied2);
console.log('tools', tools);

console.log('copied2 === tools ? ', copied2 === tools); 

/**
 * 얕은 복사는 : 1 depth까지만 복사되는 것을 의미하고, 깊은 복사는 : n depth까지 모두 복사되는 것을 의미함. (객체에 중첩된 객체들 모두 복사)
 * 얕은 복사는 slice, Object.assign같은 Javascript메서드를 지원하고,
 * 깊은 복사는 loadsh 라이브러리의 cloneDeep을 이용한다.
 */