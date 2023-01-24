

// prompt('확인용 : ');
// prompt 앞에 + / - 를 붙여서 number 타입으로 변환 => 연산 
var begin = +prompt('첫번째 숫자를 입력!');
var end = +prompt('두번째 숫자를 입력!');

var total = 0;
var num = begin;

while (num <= end) {
    total += num;
    num++;
}
alert(`${begin} ~ ${end}까지의 누적합: ${total}`);