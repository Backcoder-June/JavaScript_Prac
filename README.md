### 기록 ### 


[ push / pop / shift / unshift ] 
push : 데이터 맨 끝에 추가 
pop : 데이터 맨 끝에 제거 

unshift : 데이터 맨 앞에 추가 
shift : 데이터 맨 앞에 제거 

[ indexOf / slice / concat / reverse / includes ] 
indexOf : 인덱스 번호 뽑기 
slice(2,5) : subString 효과 ( 2번 인덱스부터 5번 인덱스 '전' 까지 ) 
concat : 배열 2개 결합 
var arr1 = [10, 20, 30];
var arr2 = [100, 80, 60, 40];
var concated = arr1.concat(arr2);
=> 사본 concated 를 만들어서 줌. 원본은 유지 

reverse : 역순 
var nums = [10, 20, 30, 40, 50];
var copyNums = nums.slice(0);
copyNums.reverse();
console.log(copyNums);
[ 50, 40, 30, 20, 10 ] 


[ 객체 ] 
var dog = {
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    injection: true,
    favorite: ['산책', '간식'],

    add: function(n1, n2) {
        return n1 + n2;
    }
};

key - value => 프로퍼티 


[ 함수 ] 
function calcAreaCircle(r) {
    console.log("야!");
    var area = pi * r ** 2;
    return area;
}

- 매개변수에 타입은 적지 않음 

- 매개변수 개수 부족하게 주면, 차례대로 넣고 부족한 부분은 undefined 넣음 
- 매개변수가 더 많으면 => 차례대로 넣고, 남는건 걍 무시 

=> 이런게 짜증나서 typescript 쓴다. 타입안맞으면 컴파일 에러 줌 


[ 리터럴 함수 ] 

//함수 정의 기본 => 이름 있는 함수 
function add(n1, n2) {
    return n1 + n2;
}


//함수 정의 기본2 (함수 리터럴)
=> 이름 없음. 자체를 변수 취급 
var add2 = function (n1, n2) {
    return n1 + n2;
};
=> 함수 리터럴이라는 '값' 으로 인식하기 때문에 ; 세미클론도 붙여 줘야 함 

add2(50, 30); // 이런식으로 리터럴 함수 사용 


[ 화살표 함수 ] 
리터럴 함수 
var sub = function(n1, n2) {
    return n1 - n2;
};

// 화살표 함수의 내용이 단 한문장이면 중괄호와 return 생략가능
var sub = (n1, n2) => n1 - n2;
sub(10,2); 


[ 콜백 함수 ] 
: 특정 시점에서 자동 호출되는 함수 
JS는 함수한테 함수를 바로 호출 시킬 수 있다.
 
function showNumber(n, x) {
    for (var i = 1; i <= n; i++) {
        if (x(i)) {
            console.log(i);
        }
    }
}

x 라는 동작 함수를 전달 받아서, if 문에 걸렸을 때 콜백 하는 것 
- 이벤트 동작할 때 콜백함수 
button.onclick = function() { }  이런 함수가 콜백함수 
button.addEventListener('click', function() {}); 



[ var / let / const ] 
: 98% const 무지성으로 박고 
에러나면 그 때나 let 쓰면 된다. ( for 문 같은거 돌릴때만 let ) 

var 
- 오버라이딩 해버림 
- hoisting 기능 

let 
- 기본적인 변수 역할 
- block 스코프 지원 

let y = '메롱'; //전역 스코프
if (true) {
    let y = 20; // block 스코프 
    console.log(`if-y : ${y}`); => 20
}
console.log(`global-y : ${y}`); => 메롱

for (let i= 0; i < 5; i++ ) { } 



const 
- static final 변수 역할 
할인율, 원주율 같은 유일성(static), 불변성(final) 가질 때 사용 

=> 특히 객체에 사용 ( 객체가 유일성, 불변성을 지녀야 할 때 ) 


=> [ 배열 / 객체 / 함수 ] 일때는 무조건 const 외워! 
const person = {
    name: '김철수',
    age: 30
};

// 이런건 안된다. 객체 자체가 바뀌는 것 
// person = {
//     name : '박영희',
//     age : 20
// };

// 이렇게는 바꿔서 사용 
person.name = '고길동';






[ Scope ] 
- 지역변수 : local 에서만 쓰이고, 바로 메모리에서 지워짐 
- 전역변수 : 많이 쓰길 권장하지 않음( memory 에 너무 오래 남아있음. 거리가 멈 )


[ 클로저 ] 



[ 객체지향 ] Java 


====================================

[ 함수지향 ] JavaScript => 고랭, kotlin 


[ Dom ] Document Object Model 
- HTML 문서를 => Javascript Object 객체로 파싱하는 것
( 개발자도구에서 html 부분 properties 확인해보면 실제로 js 객체형식으로 파싱 된 정보를 확인할 수 있다) 

=> 역으로 이 object 모델을 조작해서 => Tag 들을 조작할 수 있는 것 
즉, js로 코드를 고쳐서, => HTML 변경 

const banana = document.getElementById("sadf"); 
이 banana 는 javascript 로 작성 된 Object 객체 다. 

- element : 요소 => '태그' 를 의미 
태그.textContent 
태그.style 
으로 사용 


[ 이벤트 핸들러 ]
- 이벤트 발생 시, 호출되는 '함수' 
- 이벤트 핸들러 만들어라 => 함수 만들어라 


focus - blur(포커스 빠지는 이벤트) 



[ 프로퍼티 방식 ]
key -value 세트 : 프로퍼티 
{ 
name : 'zzz', 
age : 30,
onclick: ƒ sayHello()
} 

프로퍼티에 이벤트를 거는 방식 
=> 브라우저에 '이벤트 위임' 
( 브라우저 너가 호출해라 )

내가 부르는게 아니라, 브라우저가 호출해야 되는거니까 
sayHello() 함수호출로 하면 안되고 
sayHello 함수 자체를 정의해둬야 한다. 
$b1.onclick = sayHello;
혹은 익명함수로 
$b1.onclick = function(){}; 


- 이벤트핸들러 제거 null 
$b3.onmouseenter = null;

- 프로퍼티 방식은 이벤트를 하나만 등록할 수 있는 한계
=> eventListener 방식 사용! 

[ addEventListener ] => 이벤트 여러개 등록 가능           

$btn.addEventListener('click', hello);
$btn.addEventListener('click', function() {
$btn.style.background = 'aqua';
});

- event 제거
$btn.removeEventListener('click', hello);

- 중복해서 이벤트 걸리지 않게 하는 것도 고려해야함 
( 필요에 따라서 onlick 으로 걸지, eventListener 로 걸지 결정 ) 


[ target ] 
document.onclick = function(apple) {
console.log(apple);

- 함수에 이벤트걸었을 때, 매개변수는 이벤트객체다 

=> 개발자도구 - 콘솔에서 이벤트객체 클릭해서 보면 
target 있다. 
=> 이게 실제로 작동한 event 를 표시해 줌 ( 중요하게 사용 ) 



[ 키보드 이벤트 활용 ] 
$input.addEventListener('keyup', function(e) {
console.log(e);
if (e.key === 'Enter') {
$msg.textContent = $input.value;
$input.value = '';
}
});

log 찍어서 이벤트 프로퍼티 보면, 
프로퍼티 key : 에 입력값이 들어온다. 

=> 이걸 이용해서 이벤트 거는 것 


[ event propagation ( 전파 ) => bubbling ] 
<ul id="fruits">
        <li id="apple">Apple</li>
        <li id="banana">Banana</li>
        <li id="grape">Grape</li>
</ul>

태그가 이렇게 있을 때,
ul 에 이벤트를 걸 수도, 자식인 li 에 걸 수도 있다. 

ul 은 이벤트 영역이 기본적으로 더 크게 잡혀 있음. 

ul 에 이벤트 걸어놓고, 
li 를 클릭(이벤트) 하면 => ul 이벤트가 작동한다. ( 포함된 개념 ) 

=> propagation 되기 때문 
- 실제 이벤트가 발생한 곳은 li, 
- 이벤트를 걸어놓은 곳은 ul 

=> 자식 태그를 클릭하면 => 부모 태그들을 쭉 타고 올라가면서 
이벤트가 걸려있는지 확인 => 걸려있으면 터트림 


- 자식태그에도 이벤트가 걸려있고, 부모태그에도 걸려있으면 
=> 자식꺼도 먼저 터트리고, 부모것도 터트린다 
( 자식에 걸린 이벤트가 발생하면 부모 이벤트는 발생시키지 않아야 할 경우 문제 생김 ) 

[ e.stopPropagation(); ] 
=> 자식 태그에 이벤트 시도 시, 자기것만 터트리고
부모태그로 올라가며 찾는 propagation 을 stop 시키는 것 

[ 버블링의 활용 / 이벤트 위임 ] 
- 반대로, stopPropagation() 하지않고, 
자식 이벤트 발생 시 => 부모 이벤트를 연계해서 발생시키는 식으로 유용하게 활용


- 이벤트 핸들러를 바인딩 하는걸 계속 신경 써야함 
=> 부모한테 걸어두고 버블링 활용하는게 이걸 신경 안쓸 수 있는 효율적인 방법 

- todo 리스트 에 이벤트 걸 때도, 
생기는 리스트 하나하나에 이벤트를 거는게 아니라 
부모 태그에 걸어두면 자식들에 자동으로 버블링 되는 것 

- 버블링 사용시 주의 
=> 부모한테 걸어두고, 부모 이벤트를 발생시키면 => 자식들 모두에게 이벤트가 발생해버림 
//이벤트 발생 타겟을 제한
// 이벤트가 발생한 target이 부모의 자식 태그들과 일치하지 않는다면! => 꺼저! 
// 즉, 자식들 태그가 아니면 꺼저라 를 걸어서 부모태그 클릭시 이벤트를 막아두는 것 

if (!e.target.matches('#fruits > li')) {
return;
}




[ e.preventDefault(); ] 
if (!confirm('정말로 이동할까요?')) {
  e.preventDefault(); //기본기능 중단
}

- confirm => 확인 : ture / 취소 : false 

if(!confirm => 확인을 누르지 않았다면 => e.preventDefault(); 





====================================

[ 서버통신 ]

[ fetch ] 

fetch( URL, init(초기화할것) ); 


[ CORS ]  Cross Origin Resource Sharing 

//CORS 허용 설정 => 이 포트로 접근은 허용해 주겠다. 
@CrossOrigin(origins = {"http://localhost:5501"})
public class TodoApiController {





--=-

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>TO DO LIST</h1>
    <section class="todo">
        <ul class="todo-list">



        </ul>
    </section>




    <script>
// 요청 URL => 변수로 만들어서 사용 

// 전체 목록 
const API_BASE_URI = 'http://localhost:8080/api/todos'


// 렌더링 함수 
const render = ({todos}) => {
    console.log(todos); 
    
    let tags = '';
    todos.forEach(todos => {
        const{todoId, done, title} = todos;

        tags += `
            <li data-id=${todoId}>
                제목 : ${title}, 
                완료 : ${done}
            </li>
        `;

    });
    
    const $ul = document.querySelector('.todo-list');
    $ul.innerHTML = tags; 

    $ul.innerHTML = '확인용';


}; 





//서버에 get 요청 => fetch API 사용 
const getTodoList = () => {

    // 간소화 
    // fetch(url)
    //     .then(res => res.json())
    //     .then(todoList => {
    //         console.log(todoList);
    //     });

    // URL 로 연결한 응답 값 resp 
    const response = fetch(API_BASE_URI); 
    
    // console.log(respones);

    //응답값에서 뽑아서 사용 

    // json 형태로 
    const json = response.then(res =>{
        return res.json();
    });
    // 가져온거 보여줘 
    json.then(todoList => {
        console.log(todoList);
    });
};


// 함수 호출 
getTodoList(API_BASE_URI);






### ajax 실습시 JSON Server 설치(가상 Rest Api)

- vscode 상단부 -> 터미널 -> 새 터미널

```shell script
$ mkdir json-server-exam
$ cd json-server-exam
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
- json-server-exam폴더로 가서
- `$ npm start`로 서버실행

---

