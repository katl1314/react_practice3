/**
 * Array.prototype.forEach: 조건문과 반복문을 제거하여, 변수의 사용을 억제, 상태 변경을 피하기 위한 프로그래밍 패러다임
 */

const numbers = [1, 2, 3, 4, 5];
const pows = [];

for (let i = 0; i < numbers.length; i++) {
    pows[i] = numbers[i];
}

console.log(pows);

const pows2 = [];

numbers.forEach((value, index, arr) => {
    console.log(`value :${value}, index : ${index}, arr : ${JSON.stringify(arr)}`);
    pows2.push(value ** 2); // 각 요소에 제곱을 한 값을 배열에 저장한다.
});

console.log(pows2);