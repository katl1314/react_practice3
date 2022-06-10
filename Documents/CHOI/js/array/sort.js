const numbers = [1, 3, 2, 4, 5];

console.log(numbers.sort());

const words = ['smart', 'apple', 'swing'];
console.log(words.sort());

const kors = ['사과', '과자', '자전거'];
console.log(kors.sort());

const number2 = [1, 2, 11, 31, 3, 4, 22];
console.log('number2.sort((a, b) => b - a) [내림차순]', number2.sort((a, b) => b - a));    // 내림 차순
console.log('number2.sort((a, b) => a - b) [오름차순]', number2.sort((a, b) => a - b));    // 오름 차순

/**
 * Array.prototype.sort((a, b) => {})    배열을 정렬 하기 위한 배열 메서드
 * 기본적으로 오름차순으로 요소를 정렬한다.
 * 원본 배열이 변경된다.
 * ex) 
 * var number = [3, 1, 2, 5, 4];
 * number.sort();       // [1, 2, 3, 4, 5] 오름 차순 정렬
 * 한글과 영문도 정렬 가능함.
 * 
 * 다만! Array.prototype.sort의 경우 배열 요소의 정렬 순서는 유니코드 코드 포인터 순을 따른다.
 * 배열 요소가 숫자 타입일지라도, 문자열로 변환하여 유니코드 코드 포인터에 따라 순서가 정렬된다.
 * 
 * 따라서 이러한 문제를 해결하기 위해서는 정렬 순서를 정의하는 비교 함수를 sort함수 인수로 전달해야 한다.
 * 비교함수 반환값이 0보다 작으면 비교함수 첫번째 인자를, 0보다 크면 비교함수 두번째 인자를 우선하여 정렬한다.
 */