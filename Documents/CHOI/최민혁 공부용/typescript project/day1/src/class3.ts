interface Person2{
    name:string;
    age:number;
    say2(message:string):void;
}

abstract class Korean2 implements Person2{
    constructor(public name:string, public age:number) {
    
    }
    say2(message: string): void {
        throw new Error("Method not implemented.");
    }

    abstract loveKimchi(kind:string):void;
    
    public abstract juminNo:number;

}

class KoreanProgrammer2 extends Korean2 implements Person2{

    constructor(public name:string, public age:number, public juminNo: number) {
        super(name, age);
        this.juminNo;
    }
    
    say2(message: string): void {
        console.log(`say: ${message}`);
    }
    loveKimchi(kind:string): void {
        console.log(`I like: ${kind}`);
    }

    say(message: string): void{
        console.log(`say: ${message}`);
    }

    sayJuminNo():void{
        console.log(this.juminNo);
    }
}

const koreanProgrammer = new KoreanProgrammer2("최민혁", 25, 123456);

koreanProgrammer.sayJuminNo();