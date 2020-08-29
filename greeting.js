const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
submit_btn = form.querySelector(".submit_btn"),
greeting = document.querySelector(".js-greetings"),
button = document.querySelector(".change-name");

const USER_NM= "currentUser",
SHOWING_CN = "showing",
HIDDEN_CN = "hidden";

//마지막으로 사용자가 입력한 이름을 저장하게 하는 function
function saveName(text){
    localStorage.setItem(USER_NM,text);
}

function resetName(event){
    //button.classList.add(HIDDEN_CN);
    event.preventDefault();
    localStorage.removeItem(USER_NM); //localstorage에 저장된 username 제거
    greeting.innerHTML=""; 
    showName();    
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `${text}`;
}

function handleSumbit(event){
    event.preventDefault(); //event가 document까지 bubble돼어 올라가는 것 방지. 즉 sumbit해도 새로고침되어 보이지 X
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    button.classList.remove(HIDDEN_CN);
}

function askForName(){
    //button.classList.add(HIDDEN_CN);
    form.classList.add(SHOWING_CN);
    button.classList.add(HIDDEN_CN);
    form.addEventListener("submit",handleSumbit);
}

function showName(){
    const currentUser = localStorage.getItem(USER_NM);
    if(currentUser===null){
        //she is none
        askForName();
    }else{
        //이름을 적으 경우
        paintGreeting(currentUser);
    }
}

function init(){
    showName();
    button.addEventListener("click",resetName);
}
init();


