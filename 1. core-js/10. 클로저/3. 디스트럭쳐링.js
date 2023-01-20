
// 배열 디스트럭쳐링 

const arr = ['김철수', '주니어', '길동이']; 
// const kim = arr[0]; 
// const ju = arr[1]; 
// const kil = arr[2]; 

// 위 처럼 하나하나 해주는걸, 6문법에서 이런식으로 한방에 하게 해줌 => 디스트럭쳐링 
const [kim, ju, kil] = arr; 
console.log(`kim : ${kim}, ju : ${ju}, kil : ${kil}`); 


// 객체 디스트럭쳐링 

const emp = {
    empName : '빡빡이', 
    age : 29, 
    hireDate : '2023-02-20', 
    birthDay : '1995-12-06'
}; 

// 자바처럼 이렇게 하는거 귀찮아서 디스트럭쳐링 ( 객체 안의 객체 안의 객체 일때 . . . 계속 들어가야하니깐 )
console.log(`사원의 이름은 ${emp.empName} 이고 나이는 ${emp.age} 입니다.`)

//const{중괄호안에 key 값들 넣어놔두면} = 객체이름 
// . 안찍고 바로 가져다 쓸 수 있다. mustache 처럼.  
const{empName, age, hireDate, birthDay} = emp; 
console.log(`사원의 이름은 ${empName} 이고 나이는 ${age} 입니다.2`)
