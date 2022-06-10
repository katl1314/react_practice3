// Array.prototype.splice
// 문자열 내 요소를 중간에 삽입하거나, 요소를 제거하는 기능을 담당한다.
// splice시 반환값으로 삭제된 요소를 배열로 반환.
// splice사용시 원본 배열이 변한다.
// Array.prototype.splice(startIndex, [deleteCount, ...value]);   


var array = [1, 2, 3, 4, 5];
let result = array.splice(1, 0, 20, 30);    // startIndex의 요소에서 1개의 요소를 삭제, 그리고 20, 30이라는 데이터를 추가한다.


console.log('삭제한 요소: ', result);

console.log('원본 배열: ', array);

array.splice(1);                            // startIndex 이후의 모든 요소 삭제

console.log('원본 배열: ', array);