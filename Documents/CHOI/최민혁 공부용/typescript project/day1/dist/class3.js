var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Korean2 = (function () {
    function Korean2(name, age) {
        this.name = name;
        this.age = age;
    }
    Korean2.prototype.say2 = function (message) {
        throw new Error("Method not implemented.");
    };
    return Korean2;
}());
var KoreanProgrammer2 = (function (_super) {
    __extends(KoreanProgrammer2, _super);
    function KoreanProgrammer2(name, age, juminNo) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.juminNo = juminNo;
        _this.juminNo;
        return _this;
    }
    KoreanProgrammer2.prototype.say2 = function (message) {
        console.log("say: " + message);
    };
    KoreanProgrammer2.prototype.loveKimchi = function (kind) {
        console.log("I like: " + kind);
    };
    KoreanProgrammer2.prototype.say = function (message) {
        console.log("say: " + message);
    };
    KoreanProgrammer2.prototype.sayJuminNo = function () {
        console.log(this.juminNo);
    };
    return KoreanProgrammer2;
}(Korean2));
var koreanProgrammer = new KoreanProgrammer2("최민혁", 25, 123456);
koreanProgrammer.sayJuminNo();
