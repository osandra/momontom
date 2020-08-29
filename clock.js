const clockContainer = document.querySelector(".js-clock"); //class가 js-clock인 아이 찾기
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); //현재 시각을 가져오기
    const hours = date.getHours(); //현재 시간을 가져오기
    const minutes = date.getMinutes(); //현재 분을 가져오기
    const seconds = date.getSeconds();
    //1초가 01초 대신 1로 나와서 수정하기. 10보다 작으면 앞에 0을 붙이고 아니면 그냥 출력해라. 미니 if
    // clockTitle.innerHTML = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`
    clockTitle.innerHTML = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}`

}
function init(){
    getTime(); //init함수 안에 시작하자마자 불러올 함수를 부르기
    setInterval(getTime,1000) //1초마다 getTime함수 실행시키기
}
init(); //init함수를 부르는 것도 잊지 말기

//setInterval(fn, 1000) 실행할 간격:1000 -> 1초