const arr = [1, 2, 3, 1, 2];

// filter를 이용해서 특정 요소들을 제거할 수 있다.
// 특정 요소가 모두 중복되면 모두모두 제거된다.
function removeAll(arr, item) {
    return arr.filter((value) => {
        return value !== item
    });
}

console.log(removeAll(arr, 2));
console.log(removeAll(arr, 10));