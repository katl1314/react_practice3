const numbers = [1, 2, 3, 4, 5, 6, 7];
// Array.prototype.reduce 함수를 이용한 평균 구하기
const question1 = numbers.reduce((prev, current, index, array) => {
    // array는 배열이자 객체
    return index  < array.length - 1 ? prev + current : (prev + current) / array.length;
}, 0);
console.log('question1', question1);     // reduce를 이용한 평균 구하기 완료

// Array.prototype.reduce 함수를 이용한 최대값 구하기 => Max.max를 이용하자
const numbers2 = [5, 7, 7, 11, 10, 9];
const question2 = numbers2.reduce((acc, current, index, array) => {
    return acc < current ? current : acc;
});
console.log('question2', question2);     // reduce를 이용한 최댓값 구하기 완료

// Array.prototype.reduce 함수를 이용한 요소의 중복 횟수 구하기
/* const duplication = numbers2.reduce((acc, current, index, array) => {
    return current === 7 ? acc + 1: acc;
}, 0); */

const fruits = ['banana', 'apple', 'orange', 'orange', 'apple']
function duplication (array) {
    return array.reduce(function(acc, current) {
        console.log(acc, current, acc[current]);
        acc[current] = (acc[current] || 0) + 1; // 프로퍼티 값이 undefined이면 프로퍼티 값을 1로 초기화 한다.
        return acc;
    }, {});
}
console.log('duplication', duplication(fruits));

const array2 = [1, [2, 3], 4, [5, 6]];

const question3 = array2.reduce((acc, cur) => {
    acc = acc.concat(cur);
    return acc;
}, []);

console.log('question3', question3);

// 중첩 배열을 평탄화 하기 위해서는 ES2019의 Array.prototype.flat(deepLevel)을 이용하자.

console.log('array2.flat(2)', array2.flat(2));

// 중복 요소 제거한 배열을 반환하기
// reduce를 사용하는 것 보단, filter를 이용하여 중복된 요소를 제거하자.
const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const question4 = values.reduce((prev, cur, index, array) => {
    return array.indexOf(cur) === index ? [...prev, cur] : prev;
}, []);

console.log('question4', question4);

console.log(values.filter((value, index, array) => array.indexOf(value) === index));

console.log([... new Set(values)]); // Set를 이용하면 중복된 요소는 제외된 상태로 반환된다.

// reduce메서드 사용시 초기값은 반드시 반드시 설정한다.