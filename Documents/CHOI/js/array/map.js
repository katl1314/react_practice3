/**
 * Array.prototype.map
 * 자신을 호출한 배열을 순회하면서, 인수로 전달받은 콜백을 반복 호출한다.
 * 콜백의 반환값들로 구성된 새로운 배열을 반환한다.
 */

const numbers = [1, 4, 9];
// 자신을 호출한 배열을 순회하면서 인수로 전달받은 콜백함수의 반환값으로 구성된 새로운 배열은 만든다.
// 원본 배열은 변경되지 않는다.
const maps = numbers.map(d => d * d);   // [1, 16, 81]

console.log(maps);
console.log(numbers);                   // [1, 4, 9]


