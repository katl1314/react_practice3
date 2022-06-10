// enum 열거형
// 상수의 집합
// 특정한 상수의 집합에 이름을 부여한다.

// 상수들의 종류에 이름을 부여
enum StarbuksGrade {
    WELCOME = "WELCOM",    // 0
    GREEN = "GREEN",      // 1
    GOLD = "GOLD"       // 2
}   

function getDiscount(v:StarbuksGrade):number{
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}
// enum은 객체 형태로 반환됩니다. 
console.log(StarbuksGrade.GREEN === "GREEN");
console.log(StarbuksGrade["WELCOME"]);