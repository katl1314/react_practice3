/**
 * 자바스크립트 배열
 * 상당히 많이 쓰이는 자료구조
 * 배열을 다루기 위한 유용한 메소드가 다수 제공됨.
 * 
 * 리터럴 방식
 * var arr = [1, 2, 3];
 */

var fruits = ['apple', 'banana', 'orange']; // 배열 리터럴 생성

// 배열을 구성하는 것을 요소(Element)라고 한다.
// 객체, 함수, 배열 등 자바스크립트 내 모든 값을 인정하는 것은 배열의 요소가 될 수 있다.
// 배열에는 자신의 위치를 나타내는 0이상의 index를 가지고 있음.
/*
위 배열 fruits에는 인덱스 0으로 apple, 인덱스 1로 banana, 인덱스 2로 ornage가 있음.
*/

for (var fruit of fruits) {
    // 배열의 요소를 순차적으로 접근할 수 있음. for..of이용
    console.log('fruit : ', fruit);
}

Array.prototype.reverse2 = function(arr) {
    return arr.reverse();
}

// 배열의 길이를 나타내는 length 프로퍼티가 있음.
console.log('fruits.length : ', fruits.length);    // 3

console.log(Array.prototype === fruits.__proto__);
console.log(Object.getOwnPropertyDescriptors(fruits.__proto__));

console.log(fruits.constructor === Array);

// 자바스크립트에서 배열은 Object를 나타낸다.
console.log('typeof fruits : ', typeof fruits);

// 배열 요소 중복 제거
console.log([1,2,1,3,2,4].filter((value, index, array) => array.indexOf(value) === index)); // [1, 2, 3, 4]