
// OR 연산
console.log('hello' || 'world');
console.log(0 || '안녕');

// AND 연산자
console.log('HELLO' && 'WORLD');
console.log(null && '메롱');

console.log('====================');

var x = -10;

if(x>0){
    console.log('안녕하십니까');
}

// == short circuit 문법 엔드개념 사용해서 
// x>0 이면 and 조건 만족 검사하려고 뒤에거 작동 
// 이걸 통과 못하면 뒤에 스킵하므로 작동 안함 
x > 0 && console.log('안녕하십니까아아아!');




x > 0 ? console.log('안녕하십니까!')
      : console.log('안녕못합니다'); 





