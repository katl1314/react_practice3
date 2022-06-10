// 모듈 
// default 한번 선언 시 또 다른 default 함수를 선언 할 수 없다.
// noImplicitAny:type사용 시 자료형이 Any형태를 막을 수 있다.
export function add(a:number, b:number){
    return a + b;
}

export function minus(a:number, b:number){
    return a - b;
}