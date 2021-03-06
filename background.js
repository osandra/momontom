const body = document.querySelector("body");
const IMAGE_NUMBER =7;

function getRandomNumber(){
    const number  = Math.floor(Math.random()*IMAGE_NUMBER); 
    //7 이하 숫자 random, floor해서 정수만 0,1,2,...나옴
    return number
}

function loadImage(imagenumber){
    const image = new Image(); //image 객체가 생성되어 속성을 추가할 수 있음
    image.src = `https://osandra.github.io/momontom/images/${imagenumber+1}.jpg`
    // image.src = `./images/${imagenumber+1}.jpg`

    image.classList.add('bgimage');
    body.prepend(image);
    // body.appendChild(image); 가장 앞쪽에 append되도록 prepend
}

//배경이미지 보인 다음 html 보이도록 setTimeout 설정
function showHtml(){
    const html_text = document.querySelector(".text_container");
    html_text.classList.remove("hidden");   
    html_text.classList.add("give_animation_fadeIn");
}
  
function init(){
    const randomNumber = getRandomNumber();
    loadImage(randomNumber);
    setTimeout(showHtml,1300);
}
init();