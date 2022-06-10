/*Javascript 원시형 타입*/
let numValue:number;
let stringValue:String;
let booleanValue:boolean;
let undefinedValue:undefined;
let nullValue:null;

let objValue:object;    //레퍼런스 타입
let symbolValue:symbol; //ES6에서 추가된 타입

numValue = 10;
stringValue = "hello";
stringValue = `hello
 ${1+2}
 good
`;   //템플릿 리터럴 => 개행 가능.
// Any >> undefined, null > ...
booleanValue = true;
objValue = {name : "최민혁", age : 25};

symbolValue = Symbol();
{
    symbolValue : 'hello'
}

let nameList:string[] = ["a", "b"];
nameList.push("c");

let anyList:any[] = [1, true, {}];
// object의 name키의 value는 문자열, score키의 value 숫자만 가져올 수 있음
let user1: { name:string, score:number} = {name : '1', score : 25}

// 배열의 길이와 인덱스의 type과 일치해야 한다.
let tuple2 : [number, string] ;
tuple2 = [1, "a"];


let tuple3 : [number, string, boolean];
tuple3 = [1, "최민혁", true];

let obj2 : {name:String, age:number, height:number, isStudent:boolean}
obj2 = {
    name : "최민혁",
    age : 25,
    height : 175,
    isStudent : false
}