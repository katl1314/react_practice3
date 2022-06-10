/**
 * Array.prototype.includes(search[검색 대상], fromIndex[시작 인덱스])
 * 배열 내 요소가 있는지 여부를 확인하는 메서드,  결과는 boolean타입으로 반환한다.
 * ES7부터 지원됨
 */

const array = [1, 2, 3, 4, 5];
console.log('array.includes(5)', array.includes(5));        // 배열의 마지막 요소가 5이기 때문에 true가 반환됨.
console.log('array.includes(10)', array.includes(10));      // 배열내 10이 없기 때문에 false

console.log(array.includes(3, 2));
console.log(array.includes(1, 3));  // search 1, fromIndex 3 false

var array2 = new Array(5);
console.log(array2);

array2.fill(5);
console.log(array2);

// Array.prototype.flat
// ES10부터 지원되는 메서드, flat메서드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화시킨다.
// 인수가 생략되면 깊이는 1이다. 인수로 Infinity사용시 모든 depth가 평탄화된다.

console.log([1, [2, 3]].flat(1));
console.log([1, [2, 3, [4, 5]]].flat(2));
console.log([1, [2, 3, [4, 5, [6, 7]]]].flat(3));
console.log([1, [2, 3, [4, 5, [6, 7]]]].flat());
console.log([1, [2, 3, [4, 5, [6, 7]]]].flat(Infinity));    // 모든 depth의 항목을 평탄화 한다.

var temp = array2.slice(0, 3);
console.log(temp, array2);

console.log([1, [2, 3, [4, 5, [6, 7]]]].flat());

array.fill(2);
