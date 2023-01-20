let a = 100; 

function pluse(a){
    if(a > 0){
        a++; 
        console.log("inner a : " + a );
        return a; 
    }
}

a = pluse(a); 
console.log("a : " + a);

// let num = 0; // 전역변수 

// const increase = () => ++num; 
// num = 999;  // 중간에 끼어들면 오버라이딩 됨 


// const increase = (num) => {
//     // let num = 0; // 지역변수를 상태변수로 가져다 씀 => 값 계속 초기화 
//     ++num; 
//     num = ++num; 
//     return num; 
// };
// console.log(increase(num));
// console.log(increase(num)); 

// 전역변수 대신 클로저 사용 ( 지역변수 초기화 문제 해결 )
// 함수 안에서 함수를 return 시키기 
const increseClosure = () => {
    let num = 0; // 지역변수 

    // 내장함수 
    function increase() {
        return ++num; 
    }

    return increase;  // 이건 이 함수 자체를 통째로 리턴하겠다. 즉 increaseClosure 라는 함수를 호출하면 => increase 함수 자체가 리턴됨 
    // return increase(); 이건 함수를 호출한 결과 값을 리턴하는 거
}

const result = increseClosure(); 
// 이 result 는 함수를 리턴받은 것이므로 함수다. 
// console.log(result()); // increaseClosure 함수의 내장함수를 한번 리턴 ( num 값 전역변수는 아니지만 상태유지 )
// console.log(result()); // 호출 가능 
// console.log(result()); // 호출 가능 

// 클로저 => 전역변수는 아니지만 상태유지가 된다. 

// 클로저는 => 즉시실행 함수로 사용한다. 

function add(){} 
add(); // 이렇게 실행하던 걸 

(function() {
    return null; 
}); // 이렇게 즉시실행함수로 사용 

// increaseClosure 클로저 내장 함수로 했던걸 이런식으로 화살표 함수, 즉시실행함수로 해서 사용
const result2 = (() => {
    let num = 0; 
    return () => ++num; 
})(); // 뒤에 () 붙여줘서 함수타입으로 만듦 

console.log(result2()); 
console.log(result2()); 
console.log(result2()); 
console.log(result2()); 

// 여러개 값을 리턴하고 싶으면 객체를 리턴해주면 된다. 

const c = (function(){
    let num = 0; 

    // 함수가 들어있는 객체를 리턴 
    return {
        increase : () => ++num, 
        decrease : () => --num
    }; 
})(); 

console.log(c.increase()); 
console.log(c.decrease()); 


const counter = (function(){
let num = 0; 
function def(callback) {
    return callback(num); 
}
return def; 
// 이걸 화살표 함수로 
// return (callback) => callback(num);
})(); 


/*

-- num이 전역변수라서 increase함수 이외에도 
   num의 상태값을 변경시킬 가능성이 존재한다.

// 카운팅
let num = 0; // 카운트 상태 변수

// 카운트 상태 변경 함수
const increase = function() {
    return ++num;
};

console.log(increase());
console.log(increase());

num = 999;

console.log(increase()); // 3?? => 1000
*/


//=======================================

/*

-- num이 지역변수라서 함수 호출시 재초기화되는 문제

const increase = function() {
    let num = 0; // 상태변수를 지역변수 처리
    return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase()); // 3?
*/


//==================================

// const increaseClosure = function() {

//     let num = 0; // 상태 변수

//     return function() {
//         return ++num;
//     };
// };

// const increase = increaseClosure();

// const increase = (() => {
//     let num = 0; // 상태 변수
//     return () => ++num;
// })();



// const another = function() {
//     return ++num;
// }

// another();