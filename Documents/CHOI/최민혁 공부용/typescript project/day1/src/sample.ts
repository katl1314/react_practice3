// 모듈 
// dist에서 js가 읽는 것 처럼 경로를 확실하게 작성해야 한다.
import {add, minus} from './util.js';

const resultValue = add(1, 2);
console.log(resultValue);

const resultValue2 = minus(10, 5);
console.log(resultValue2);

// 설정파일 tsconfig.json

// 오픈소스 프로그래밍
// 정적인 언어 컴파일 시간에 타입을 검사
// 프로그래밍 언어로서 js기능 지원 가능하고 최신 js기능도 지원한다.

// 개발환경 구성
// 1. Node.js
// 2. 비주얼코드 스튜디오
// 3. 개발프로젝트 만들기

// 컴파일 명령어 tsc 실행할 파일명.ts
// npm install typescript -g (전역으로)
// 구형 브라우저에서도 동작할 수 있도록 ES5형태로 지원
// 만약 ES6버전 이후 지원이 되어야 한다면
// tsc sample.ts --target es6

// tsc sample.ts --lib es5,es2015.promise,es2015.iterable,dom

// 모듈 사용법
// export default add(파라미터){ return 결과처리; }
// import add from './모듈명'
