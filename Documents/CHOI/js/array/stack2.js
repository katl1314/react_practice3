/* 클래스로 구현한 Stack */
class Stack {
    #array;     // ES2019부터 지원하는 class private fields
    constructor (array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not Array`);
        }
        this.#array = array;
    }

    // 배열 마지막 요소 추가 후, length프로퍼티를 반환하는 push함수
    push(value) {
        return this.#array.push(value);
    }

    // 배열 마지막 요소 삭제 후, 삭제된 요소를 반환하는 pop함수
    pop() {
        return this.#array.pop();
    }

    // Stack의 복사본 배열을 반환한다.
    entries() {
        return [...this.#array];
    }
}

const stack = new Stack([1, 2, 3, 4, 5]);
console.log('entries', stack.entries());
console.log('push(\'smart\')', stack.push('smart'));
console.log('after push(6) entries', stack.entries());
console.log('pop()', stack.pop());
console.log('after pop() entries', stack.entries());
