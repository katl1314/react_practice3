class Numbers {
    numberArray = [];

    multiply(array) {
        return array.forEach((element) => {
            // arrow함수의 경우 상위 스코프의 this를 참조하기 때문에 TypeError가 발생하지 않음.
            // function() {} 일반 함수의 경우 this는 undefined를 가리키는데 이는 class특성상 strict mode가 적용되기 때문이다.
            // Array.prototype.forEach메서드 사용시 continue, break사용하여 반복문 중단이 불가능함.
            this.numberArray.push(element ** 2);
        });
    }
}

const numbers = new Numbers();
console.log(numbers.multiply([1, 2, 3, 4, 5]));