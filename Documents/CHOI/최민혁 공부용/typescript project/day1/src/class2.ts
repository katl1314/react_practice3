interface Person{
    name:string;    // 필드
    say(message:string):void;     // 메소드
}

interface Programmer{
    writeCode(requirment:string):string
}

// 인터페이스는 여러개를 상속 받을 수 있다.
/*
class KoreanProgrammer implements Person, Programmer{
    constructor(public name:string) {
    }

    say(message?:string):void{
        console.log(message);
    } 
    
    writeCode(requirment:string):string{
        console.log(requirment);
        return requirment+"...";
    }

    loveKimchi(){
        console.log("Love ~ Kimchi");
    }
}

const jay = new KoreanProgrammer("jay");

jay.say("최민혁입니다.");

*/
abstract class Korean implements Person{
    public abstract jumin : number;

    constructor(public name:string) {
        
    }

    say(message:string){
        console.log(message);
    }
    
    abstract loveKimchi():void;
}

/////////////////////////////////////////////////

class KoreanProgrammer extends Korean implements Programmer{
    
    loveKimchi(): void {
        console.log("나는 김치를 좋아해");
    }
    
    constructor(public name:string, public jumin:number) {
        super(name);
    }

    say(message?:string):void{
        console.log(message);
    } 
    
    writeCode(requirment:string):string{
        console.log(requirment);
        return requirment+"...";
    }


}

const jay = new KoreanProgrammer("jay", 123456);

// 추상 클래스는 인스턴스를 만들 수 없다.
// const jay2 = new Korean("ko");