const title = document.getElementById("title");
title.innerHTML = "Hi! form JS";

const CLICKED_CLASS = "clicked"

function handleClick() {
    // console.log(title.className);
    const currentClass = title.className;
    // console.log(currentClass);
    /*이렇게 할 경우, 원래 class가 있다면 원래 class의 style이 적용 되지 X
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else{
        title.className = '';
    }
    */

    /*
    const hasClass = title.classList.contains(CLICKED_CLASS)
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
    */

    //한번에 해결. 클래스 있는지 확인해서 없으면 더해주고 있으면 제거
   title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init()