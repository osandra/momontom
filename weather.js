const COORDS = "coords"
const weather = document.querySelector(".js-weather");
function saveCoords(geoObject){
    localStorage.setItem(COORDS,JSON.stringify(geoObject));
}

function getWeather(lat,lon){
  fetch(
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.api_key}&units=metric&lang=kr`
).then(function(request){
    return request.json(); //JSON정보 리턴
}).then(function(json){
    console.log(json);
    const temp = json.main.temp;
    let temp_slice = temp.toString().slice(0,2); //26도까지 보여주기
    weather.innerHTML= `${temp_slice}°C`;
})

}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoObject = {
        latitude:latitude,
        longitude,
    }
    saveCoords(geoObject);
    getWeather(latitude,longitude);
    // console.log(position.coords.latitude);
}

function handleGeoError(){
    console.log("cant find location");
}

function askForCoord(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
    console.log('asking');
}
function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoord();
    }else{
        //이미 LS에 정보 있을 때도 호출
        const parsedLoadCoords = JSON.parse(loadCoords) //string에서 다시 object로 변환
        getWeather(parsedLoadCoords.latitude,parsedLoadCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();