// 선형 검색을 통해 배열에 특정 요소를 존재하는지 확인한다.
// 해당 요소가 존재하면 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.

const { concat } = require("ramda");

function linearSearch(array, target) {
    var length = array.length;

    for (var i = 0; i < length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

var numbers = [1, 2, 3, 4, 5, 6];

console.log(linearSearch(numbers, 3));
console.log(linearSearch(numbers, 0));

console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

const arr = [
    'string',
    10,
    true,
    false,
    null,
    undefined,
    NaN,
    Infinity,
    {},
    [],
    function() {}
]

// console.log(Object.getOwnPropertyDescriptors(arr));

/* 
    console.time(id);
    ...
    console.timeEnd(id);
*/

console.time('Array Performance Test');
for (var i = 0; i < 10000000; i++) {

}

console.timeEnd('Array Performance Test');

console.log('arr.length', arr.length);

var sparse = [, 2, ,4];
console.log('sparse', sparse);  // [Empty, 2, Empty, 4]

console.log(Object.getOwnPropertyDescriptors(sparse));


/**
 * 배열의 길이는 최소 0 부터 최대 4,294,967,295개를 갖을 수 있다.
 */

var numArr = new Array(1, 2, 3, 4, 5);  // var numArr = [1, 2, 3, 4, 5];
console.log('numArr', numArr);   // [1, 2, 3, 4, 5]

/**
 * Array.of메서드는 전달받은 인수를 요소로 갖는 배열을 생성한다.
 * ex) Array.of(1, 2, 3, 4, 5) => [1, 2, 3, 4, 5]
 */
console.log('Array.of(1, 2, 3)', Array.of(1, 2, 3));    // [1, 2, 3]
console.log('Array.of(\'string\')', Array.of('string'));    // ['string']

/**
 * Array.from메서드는 유사 배열 객체, 이터러블 객체를 인수로 전달받아 배열로 변환한다.
 */
console.log(Array.from('Smart'));   // ['S', 'm', 'a', 'r', 't']
console.log(Array.from({length : 2, 0 : 'a', 1 : 'b' }));

function sum() {
    // 유사 배열 객체를 배열로 변환 후 각 요소를 합하여 반환한다.
    console.log('sum', Array.isArray(arguments));
    return Array.from(arguments).reduce((acc, val) => acc + val, 0);
}

console.log(sum.call(null, 1, 2, 3, 4, 5));     // 15
var fromArr = Array.from({length : 3}, (_, i) => i);  // [0, 1, 2]
console.log('Array.from({length : 3}, (_, i) => i)', fromArr);

console.log(Array.of('smart', 'Choi', 'twitchTv'));

// 배열 내부에 프로퍼티 와도 됨
console.log(Object.getOwnPropertyDescriptors(fromArr));
//

var originArr = [0];
originArr[1] = 10;

console.log(Array.isArray(originArr));  // Array.isArray메서드는 배열 여부 체크하는 정적 메서드

// Array.prototype.indexOf(char, index?);   // 배열 내 요소 검색 => index 반환
// 배열 요소가 중복되면 가장 첫번째의 요소의 index를 가리킴
// 두번째 인자는 검색을 시작할 인덱스를 지정합니다. 미 설정시 0부터 검색
console.log('5? ', [1, 2, 3, 4, 5, 5].indexOf(5));  // 4

// 배열의 요소가 없으면 -1을 반환합니다.
console.log('-4? ', [1, 2, 3, 5].indexOf(-4));      // -1

// ES7에 도입된 includes를 사용하면 indexOf비해 편하다. => 배열에 요소가 있으면 true, 없으면 false
console.log([1, 2, 2, 3, 4].includes(2));
console.log([1, 2, 2, 3, 4].includes(-2));


// push 메서드는 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.

var emptyArray = [1];

console.log(emptyArray.length);

console.log(emptyArray.push(1));
console.log(emptyArray.push(2));  // 배열 마지막 요소로 추가하고 length프로퍼티를 반환하는 함수 push(value) 

// push함수는 원본 배열을 변경하는 문제가 있기 때문에 spread 문법을 이용하여 추가하여 부수 효과를 없앨 수 있다.
var addArr = [4, 5];
var concatArr = [...emptyArray, ...addArr];
console.log('before pop', concatArr);

// Array.prototype.pop() 마지막 요소를 제거하고 제거한 요소를 반환한다.
// 원본이 빈 배열(Empty Array)시 undefined를 반환한다.
/* console.log(concatArr.pop());
console.log(concatArr.pop());
console.log(concatArr); */

while (true) {
    if (!concatArr.pop()) {
        // 빈 배열일 경우 반환되는 값이 undefined일 때 반복문을 종료한다.
        break;
    }
}

console.log('after pop', concatArr);