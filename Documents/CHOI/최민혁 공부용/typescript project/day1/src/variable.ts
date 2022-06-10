var score1 = 0;
let score2 = 200;
const defaultScore = 0;

// var: 함수 단위 블록 스코프 => 함수 안에서만 접근 허용
// let: 블록 단위 스코프 -> ex) if또는 for같은 불록 내부에서만 접근 허용
// const는 반드시 초기값이 필요하다. => 선언과 동시에 값을 할당. 상수 => 한번 할당된 값은 두번다시 할당할 수 없음. 블록형태 스코프

// 타입스크립트의 경우 초기값에 따라서 type이 달라진다. 초기값을 지정하지 않으면 Any형태.

function outer(){
    if(true){
        const score = 5;
        //score = '30';

    }

    // for (let index = 0; index < 3; index++) {
    //     setTimeout(() => {
    //         console.log(index);            
    //     }, 100);
    // }

     
}
outer();