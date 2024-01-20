const API_KEY = "736fc8e0d3b2083c0e9cba397a8a276f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather-wrap p span:first-child");
      const weather = document.querySelector(".weather-wrap p span:last-child");

      city.innerText = `🗺 ${data.name}`;
      if (data.main.temp < 0) {
        weather.innerText = `${data.weather[0].main}  🥶 ${data.main.temp} ℃`;
      } else if (data.main.temp < 10) {
        weather.innerText = `${data.weather[0].main} / 🤧 ${data.main.temp} ℃`;
      } else if (data.main.temp < 20) {
        weather.innerText = `${data.weather[0].main} / 😐 ${data.main.temp} ℃`;
      } else if (data.main.temp < 30) {
        weather.innerText = `${data.weather[0].main} / 😰 ${data.main.temp} ℃`;
      } else {
        weather.innerText = `${data.weather[0].main} / 🥵 ${data.main.temp} ℃`;
      }
    });
}

function onGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
