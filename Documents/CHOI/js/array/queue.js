class Queue {
    #array; // private변수 array 선언
    constructor(array) {
        // 인스턴스 초기화
        if (!Array.isArray(array)) {
            this.#array = Array.from(arguments);
        } else {
            this.#array = array;
        }
    }

    // 프로토타입 메서드 선언
    enqueue(value) {
        return this.#array.unshift(value);
    }

    dequeue() {
        return this.#array.pop();
    }

    entries() {
        return [...this.#array];
    }
}

const array = new Queue([1, 2, 3, 4, 5]);
console.log('enqueue(-1)', array.enqueue(-1));  // push후 length가 반환된다.
console.log('after enqueue', array.entries());

console.log('dequeue()', array.dequeue());  // 마지막 요소 삭제 후 삭제된 요소 반환
console.log('after enqueue', array.entries());
/* (function sum() {
    const datas = Array.from(arguments);
    console.log(datas);
})(1, 2, 3); */
