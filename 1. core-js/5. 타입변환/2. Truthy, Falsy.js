// => boolean 이 아닌 데이터를 boolean 으로 변환해주는 개념 

// if (100) { }  
// : 100 은 boolean 이 아닌 number, 0 이 아니므로 true 


// 0, '', null, undefined, NaN -> 거짓판정


// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8');
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10');

console.log('=====================');

var num = 9;
if (num % 2) { //if (num % 2 !== 0) {
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
}

var apple = 0;
if (apple) {
    console.log('사과가 하나도 없습니다.');
} else {
    console.log(`사과가 ${apple}개 있습니다.`);
}



