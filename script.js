/* 브라우저는 위치기반 서비스를 제공 -> 개발자도구 -> console -> window -> nevigator->geolocation 이 위도와 경도를 알려줌! ->getCurrentPosition -> 위치기반 서비스 동의 문구 보내는얘! */
const getCurrentWeather = (lat, lon) => {
const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e40a2bf6ca830d6b17177a89674f260b`;

console.log(URL);
};

const getPosition = (position) => {
const {latitude, longitude} = position.coords;
getCurrentWeather(latitude, longitude);
};

const errorHandle = (error) => {
  console.error(error);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle);
} else {
  console.log("geolocation is not available")
}

