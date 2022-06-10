// Array.prototype.concat함수는 배열과 배열을 합치는 기능이다.
// 원본 배열에는 영향을 미치지 않는다.
// concat(...Array)
var source = [1, 2, 3];
var target = [4, 5];

var copied = source.concat(target); // [1, 2, 3, 4, 5]
console.log('copied, source', copied, source);

// concat을 ES6 spread 문법으로 표시하였다.
var copied2 = [...source, ...target];
console.log('copied2, source', copied2, source);

// push와 unshift를 concat으로 대체할 수 있다.
const arr1 = [3, 4];
arr1.unshift(1, 2);
console.log('unshift(1, 2)', arr1);

arr1.push(5, 6);
console.log('push(5, 6)', arr1);

const arr2 = [3, 4];
let copied3 = [1, 2].concat(arr2);

copied3 = copied3.concat([5, 6]);
console.log('copied3', copied3);