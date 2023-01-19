// # 배열 고차함수 

const arr = [1,2,3,4,5,6,7,8,9,10]; 

//1.forEach  => 단순 소비 ( consume )
arr.forEach(n => {
    console.log(n);
})

//2. filter => 조건 콜백함수에 맞게 필터링 (java filter 기능)
const evenarr = arr.filter(n => n%2 === 0);
console.log(evenarr);

//3. map  => 조건 콜백함수에 맞게 새롭게 맵핑해서 리턴 (java map 기능)
const powArr = arr.map(n => n ** 2);
console.log(powArr);