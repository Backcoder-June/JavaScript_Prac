// 스프레드 : 안전한 객체, 배열 복사 

const foodList = ['짜장', '짬뽕', '탕슉']; 

// 이렇게 카피해두면 => 주소값을 복사하는 개념 
// 메모리 - 주소 => heap 개념 
// const copyFoodList = foodList;

//이렇게 자바처럼 자료구조에 데이터를 직접 복사해야 되는 것, 즉 새로 생성을 해야 되는 것 
const copyFoodList = []; 

for (let f of foodList) {
    copyFoodList.push(f); 
}

// 이걸 6 문법부터 ... 으로 자동 제공  
// const copyFoodList = [...foodList]; 


//변 화 생겼을때
foodList[1] = '라면'; 
copyFoodList[2] = '짜빠게티'; 

// 양쪽 두 개 다 바뀜 (주소값이 가르키는 heap 메모리가 결국 같으니까) 
console.log('원본 : ' + foodList); 
console.log('사본 : ' + copyFoodList); 


// 객체도 마찬가지 


const emp = {
    empName : '빡빡이', 
    age : 29, 
    hireDate : '2023-02-20', 
    birthDay : '1995-12-06'
}; 


const copyEmp = {
    ...emp, 
    isCopy : true,  // 추가적인거 추가 
    age : 50 // 수정할 꺼 수정도 바로 가능 
};

console.log(copyEmp);



