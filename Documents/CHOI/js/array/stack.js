/* 생성자 함수로의 Stack */
const Stack = (function() {
    function Stack(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not Array`);
        }
        this.array = array;
    }

    Stack.prototype = {
        // 생성자 함수에 의한 프로토타입 교체
        constructor : Stack,
        // push(value) : 배열의 마지막요소 추가 후 length반환
        push(value) {
            return this.array.push(value);
        },
        // pop() : 배열의 마지막요소 삭제 후 삭제된 요소 반환, 빈 배열인 경우 undefined반환
        pop() {
            return this.array.pop();
        },
        // entries() : 배열의 복사본 복사
        entries() {
            return [...this.array];
        }
    }

    return Stack;
})();

const stack = new Stack([1, 2, 3, 4, 5]);
console.log('entries', stack.entries());
console.log('push(\'smart\')', stack.push('smart'));
console.log('after push(6) entries', stack.entries());
console.log('pop()', stack.pop());
console.log('after pop() entries', stack.entries());
