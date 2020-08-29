//다른 파일에 있는 변수명이라 겹치니까 이름 바꿔주기

//form은 always showing한 상태
//js파일에서 init함수 만들고 변수 선언하는 것부터 시작하는 듯
const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

//TODOS_LS: LS는 localstorage를 의미

let toDos = []; //추후 삭제 버튼 누르면 toDos list바꿔야 하므로

const TODOS_LS = "toDos" //따옴표 잊으면 안돼 localStorage약자 LS
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos) //LOACL에 저장된 object를 다시 string으로 변환
        //object로 변환된 객체 하나하나에게 함수를 적용할 것. 하나하나 paintToDo적용
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text); 
        //이렇게 하면 바로 등록하는 것은 paintToDo로 보여지고 새로 고침했을 때 아까 등록한 것들도 같이 보여진다.
        })
    }
}

/*localStorage에 저장하기
  JSON = javascript object notation
  JSON.stringify는 자바스크립트의 object를 string으로 바꿔줌 */
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); //toDos object를 string으로 저장
}

function deleteToDo(event){
    //console.dir(event.target) dir로 button클릭하면 넘어오는 정보 확인
    // console.log(event.target.parentNode)
    const button = event.target;
    const li = button.parentNode;
    //ul에서 해당 li 삭제
    toDoList.removeChild(li);
    const newTodo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id) //방금 클릭한 li의 id와 다른 것만 return해라 int로 바꾸면 안 먹힘
    });
    //위의 변수는 아무거나 해도 된다
    toDos = newTodo; //toDos를 newTodo로 바꾸기
    saveToDos();
}


const spanwidth_CN= "spanWidth";
//paintToDo함수에서 li & deleteBtn 만들기
function paintToDo(text){
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    const toDoId = toDos.length+1 //1번 할 일, 2번 할 일 순차적으로 id붙여주기 []일 때 length는 0
    deleteBtn.addEventListener("click",deleteToDo);
    span.innerText = `${text} `; //버튼 너무 안 붙어있게
    span.classList.add(spanwidth_CN); //span의 너비를 주기 위해 class 넣음. 이렇게 안 해도 됌,,
    deleteBtn.innerHTML='❌';
    li.appendChild(span); //li 안에 span넣어주기
    li.appendChild(deleteBtn); 
    li.id = toDoId; //나중에 삭제하기 위해 li에도 id값 붙여주기
    toDoList.appendChild(li);
    const toDoObject = {
        text: text,
        id: toDoId
    }
    toDos.push(toDoObject) //[]에 toDoObject 넣어주기
    saveToDos(); //localstorage에 저장
}

function handleToDoSumbit(event){
    event.preventDefault(); //bubble 방지
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // saveToDolist(currentValue);
    toDoInput.value =""; //등록 직후 이전에 input창 다시 원래대로
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleToDoSumbit);
}
init();