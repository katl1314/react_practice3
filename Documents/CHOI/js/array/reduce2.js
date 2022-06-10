const deepArray = [1, 2, [3, 4]];

console.log(deepArray.reduce((prev, current, currentIndex, {length}) => {
    console.log(length);
    return prev.concat(current);
}, []));


const numbers1 = [1, 2, 3];
const numbers2 = [4, 5];
numbers1.concat(numbers2)
console.log(numbers1)