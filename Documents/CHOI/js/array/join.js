/**
 * Array.prototype.join(separator) => string
 * 배열의 요소를 separator(구분자)를 포함하여 문자열로 변환.
 */

var array = [1, 2, 3, 4, 5];
console.log(array.join(','));
console.log(array.join(' '));
console.log(array.join(''));

/**
 * Array.prototype.reverse()
 * 배열의 순서를 반대로 뒤집는다.
 * 해당 메서드 사용시 원본 배열이 바뀌게 된다.
 */

console.log(array.reverse());

// Array.prototype.fill
// 배열의 요소를 채우는 메서드, 원본 배열이 변경됨.
// Array.prototype.fill(value, start?, end?)
// 첫번째 인자만 받으면 모든 요소가 변하게 된다.
var array2 = [1, 1, 1, 1, 1];
array2.fill(3, 2, array2.length);   // value 3, startIndex 2, endIndex array2.length

console.log(array2);                // 2번째 요소부터 5번째 요소까지 모두 3으로 변경한다.

array2.fill(5);
console.log(array2);                // 배열 내 모든 요소를 5로 변경한다.


const sequences = (n) => Array.from({length : n}, (v, k) => k);
console.log(sequences(5));