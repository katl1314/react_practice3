var Stack = (function () {
    function Stack() {
        this.data2 = [];
    }
    Stack.prototype.constractor = function () { };
    Stack.prototype.push = function (item) {
        this.data2.push(item);
    };
    Stack.prototype.pop = function () {
        return this.data2.pop();
    };
    Stack.prototype.showList = function () {
        console.log(this.data2.length);
        for (var i = 0; i < this.data2.length; i++) {
            console.log(this.data2[i]);
        }
    };
    return Stack;
}());
var stack = new Stack();
stack.push("Happy");
stack.push("Murdoc");
stack.push("Hambugger");
stack.showList();
