

//특정 연산의 결과를 저장하고 싶어요

//1. 변수를 만든다 (선언)
var result;

//2. 변수를 초기화 (값을 저장)
// = : 대입 (assignment)
result = 10 + 12;

console.log(result * 3);

result = result * 3;
console.log(result);

//변수는 선언과 동시에 초기화 가능
var score = 95;

console.log(score);

score = 73;
console.log(score);

score = result + 10;
console.log(score);

console.log('=========================');

var user_name = '고길동';

console.log(`안녕하세요! 제 이름은 ${user_name}입니다`);
console.log(`${user_name}은 아주 착합니다.`);


console.log(user_name + ' : 백틱 안썻을 때는 변수명 그대로 가져다 사용');
console.log(`백틱 썼을 땐 줄바꿈 등도 그대로 인식해서 들어가고 
변수명 : ${user_name} 의 경우  달러로 변수 가져다 쓸 수 있는데, 
JSP에서 쓸 경우 $문법이 겹친다. 
이땐 $ 는 EL을 의미하고, 
백틱 에서는 \$ 백슬러쉬로 구분해서 사용한다. 
`);

