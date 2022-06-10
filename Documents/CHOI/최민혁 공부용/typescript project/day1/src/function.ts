function add(x:number, y:number) : number{
    return x + y;
}

// 매개변수에는 type 어노테이션을 작성해야 한다. 

const result = add(3, 10);  // 반환값이 number타입인 것을 추론

// 함수 인자에 type 어노테이션을 할당할 수 있다. arg : string 
// 함수 인자에 ?을 사용할 경우 필수로 입력하지 않아도 된다.
// 만약 기본값을 지정하고자 할때 ?과 type을 삭제 후 '= 기본값' 형태로 넣을 수 있다.
function  buildUserInfo(name = "-", email = "-"){
    return { name, email };
}

const result2 = buildUserInfo();

const add2 = (a:number, b:number):number => a + b;

interface Storage{
    a:string;
}

interface ColdStorage{
    b:string;
}
// 함수 시그니처
function store(type:"통조림"):Storage
function store(type:"아이스크림"):ColdStorage

// 함수 오버로드 시그니처

function store(type:"통조림" | "아이스크림"){
    if(type === "통조림"){
        return {a: "통조림"};
    }else if(type ==="아이스크림"){
        return {b: "아이스크림"};
    }else{
        throw new Error("unsupported type");
    }
}

const s = store('통조림');
s.a;


