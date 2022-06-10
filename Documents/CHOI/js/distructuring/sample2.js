// 변수에 기본값을 선언할 수 있다.
const [a, b, c = 3] = [10, 20];   
console.log(a, b, c);   

// 다만 기본값보단 우항의 배열 요소가 우선순위가 높다.
const [d, f = 1, g = 2] = [10, 20, 30];
console.log(d, f, g);   // f, g의 경우 기본값이 각각 1, 2이지만 배열 요소(할당된 값) 20, 30이 들어간다. 기본값보다 할당값이 우선!!!!!!!!!