

var ex = 10 + +'20';
console.log(ex);

var num = 200 + '';
console.log(typeof num);

// + 는 String 에서도 합치는 의미가 있어서 + 는 String 합 으로 되고, 
// 나머지 -, *, / 등의 연산은 number 로 형변환 되어 연산 된다.  
// String 에 + 연산을 하려면 String 값 앞에 + 붙여서 number 로 형변환 시킨 후 연산 가능 
var ex2 = +'100' + +'55';
console.log(ex2);