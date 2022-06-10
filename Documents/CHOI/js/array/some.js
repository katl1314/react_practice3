/**
 * Array.prototype.some메서드
 * 자신을 호출한 배열의 요소를 순차적으로 순회하면서 인수로 전달받은 콜백함수를 실행한다.
 * 반환값이 하나라도 true이면 결과는 true, 모두 false이면 결과는 false로 반환된다. (Boolean)
 * 
 * Array.prototype.every메서드
 * 자신을 호출한 배열의 요소를 순회하면서 인수로 전달받은 콜백함수를 호출한다.
 * 만약 콜백함수의 반환값이 모두 true시 결과는 true, 하나라도 false이면 false가 반환된다. (boolean)
 */

console.log('짝수', [2, 4, 6].some(value => !(value % 2))); 
console.log('짝수', [2, 5, 6].some(value => !(value % 2))); // 하나라도 반환값이 true이면 결과는 true이다.
console.log('짝수', [3, 5, 7].some(value => !(value % 2))); // 모두 반환값이 false이면 결과는 false이다.

console.log('짝수', [2, 4, 6].every(value => !(value % 2))); // every는 반환값이 모두 true이면 결과는 true이다.
console.log('짝수', [2, 5, 6].every(value => !(value % 2))); // 만약 하나라도 false가 반환되면 결과는 false이다.
console.log('짝수', [3, 5, 7].every(value => !(value % 2))); // 모두 반환값이 false이면 결과는 false이다.