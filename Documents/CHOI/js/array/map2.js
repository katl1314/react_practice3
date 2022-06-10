class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        /* return arr.map(function (value, index, array) {
            return `-${this.prefix}-${value}`;
        }, this);   // map함수 두번째 인자에 this를 바인딩 하지 않아도 콜백함수를 화살표함수로 선언시 add함수(상위 스코프)의 this를 참고하기 때문에 두번째 인자 없이도 동작 가능. */
        return arr.map((value) => `-${this.prefix}-${value}`);  // 위 결과랑 똑같다.
    }
}

const prefixer = new Prefixer('webkit');

console.log(prefixer.add(['transition', 'user-select']));