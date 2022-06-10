// 희소 배열
const numbers = [1, , 3];

for (let i of numbers) {
    console.log(i);
}

numbers.forEach((value) => console.log(value)); // undefined인 경우 반복문에서 제외됨.