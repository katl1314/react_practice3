function sum() {
    let array = [...arguments];
    return array.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));
