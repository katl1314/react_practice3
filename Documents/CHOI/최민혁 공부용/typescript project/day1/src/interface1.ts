// 인터페이스 : 새로운 타입을 만든다라는 의미
// interface 키워드 사용
// ex) interface Tv

interface TV {
    // 메소드를 정의, body블록이 없어야 한다.
    turnOn()  : boolean;
    turnOff() : void;
    isTrue : boolean;
}

const myTv : TV = {
    // 인터페이스를 받아서 처리
    turnOn(){
        return true;
    },
    turnOff(){
        return false;
    },
    isTrue : false
}

function turnTv(tv:TV){
    tv.turnOn();
}

function tryTurnOn(tv:TV){
    tv.turnOn();
}

tryTurnOn(myTv);

// 인터페이스는 메소드 뿐 만 아닌 속성도 가질 수 있다.
interface Cell{
    row: number;
    col: number;
    piece?: Piece;      // 속성 뒤에 ?를 사용할 경우 선택적으로 추가할 수 있다.
}

interface Piece{
    move(from:Cell, to:Cell) : boolean;
}

function createBoard(){
    const cells : Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({
                // 객체 key와 데이터가 같으면 데이터의 경우 생략 가능.
                row,
                col
            })            
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from:Cell, to:Cell):boolean{
        return true;
    }
}


interface SignUp{
    [x: string]: number;
    email:string;
    id:string;
    password:string;
}

function sendAjax(data:SignUp){
    console.log(data);
}

let data:SignUp = {
    email : "nogoso1@naver.com",
    id : "nogoso1",
    password : "1234"
}

sendAjax(data);
