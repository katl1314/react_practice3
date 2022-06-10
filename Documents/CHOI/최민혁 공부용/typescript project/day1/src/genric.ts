function createPromise<T>(x:T, timeoute:number){
    return new Promise<T>((resolve, reject)=>{
        setTimeout(() => {
            resolve(x);
        }, timeoute);
    })
}
// 제네릭 타입을 파라미터화
// 함수명<T> 
createPromise('a', 1000).then(v=>console.log(v));


function createTuple<T, U, D>(t:T, u:U, d:D): [T, U, D]{
    return [t, u, d];
}

const t1 = createTuple<string, number, number>("user1", 1000, 2000);
