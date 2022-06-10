/**
 * unshift메서드는 인수로 전달받은 값을 원본 배열의 선두에 요소를 추가하고, 변경된 length를 반환하는 함수이다.
 * unshift, push, pop, shift는 원본배열을 변경하기 때문에 가급적 스프레드 문법을 이용하여 추가, 삭제하도록 권장한다.
 */

var a = [1, 2];
var result = a.unshift(3, 4);
console.log(result, a);     // 4, [3, 4, 1, 2] => 원본 배열이 변경된다.

console.log([5, ...a], a);  // 스프레드 문법을 사용하면 원본값이 변경되지 않는다.

console.log(a.shift());