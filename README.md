# DayMaker

# 🌱 서비스

https://github.com/seunghyun0522/DayMaker/assets/75532258/06c703b3-caf3-4289-8cd3-8d7862f993e9

🔗 LINK : [DayMaker](https://seunghyun0522.github.io/DayMaker/)

# 💻 개발 환경

## 🔨 Library & Language

  <img src="https://img.shields.io/badge/Java Script-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&amp;logoColor=white">    
## 🔨 API 
<img width="150" alt="image" src="https://github.com/seunghyun0522/DayMaker/assets/75532258/184906a0-c9ff-4dc1-9977-9f4e88aa5846">

[OpenWeatherMap](https://openweathermap.org/api)

# 🚀 실행 방법

```
$ git clone https://github.com/seunghyun0522/DayMaker.git
```

# 📁 디렉토리 구조
```
├── 📑css
│   ├── 📜reset.css
│   └── 📜style.css
├── 📑imgs
│   ├── background
│   └── icon
├── 📜index.html
└── 📑script
    ├── 📜background.js
    ├── 📜calender.js
    ├── 📜clock.js
    ├── 📜quotes.js
    ├── 📜todoList.js
    ├── 📜user.js
    └── 📜weather.js
```

# 💡 구현 기능 및 구현 방식

## 1. Data 입력시 새로고침 방지

- html tag를 form으로 설정하고 input을 통해 입력하고 로그인 버튼을 눌렀을 때 결과값이 따로 출력이 되지 않는 현상을 볼 수 있다.
아래와 같은 상황은 실행이 되지 않는다. 
```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit() {
  const username = loginInput.value;
  console.log(username);
}
loginForm.addEventListener("submit", onLoginSubmit);
```

form 태그는 기본적으로 submit를 하면 브라우저는 기본적으로 페이지를 새로고침하도록 되어있다. → 이것을 막는 것이 ```preventDefault()``` 이다.

실행이 되기 위해서는 ```preventDefault()```를 사용해야 한다. → 즉 브라우저가 기본 동작을 실행하지 못하게 막아주는 것 뿐이다.
```preventDefault()```를 사용하기 위해서는 function내 argument를 일단 채워야 한다.

```js
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
```

## 2. Data 를 local에 저장하기

- 현재 DB를 따로 사용하지 않고 있기 때문에 local 내에 데이터를 저장해야 한다.
- 그러기 위해서는 ```local Storage``` 라는 작은 DB에 저장해야 한다. (새로고침 후에도 살아 있게!)
  ```localstorage.setItem(key,value)``` : 데이터를 저장 <br/>
  ```localstorage.getItem(key,value)``` : 데이터 가져오기<br/>
  ```localstorage.removeItem(key,value)``` : 데이터 지우기<br/>

## 3. 실시간 시간 받아오기

- js 내에 있는 다양한 기능이 있지만 간단한 함수를 사용한다.
- ```new Date()```를 사용해 실시간 시간을 가져온다.
- 시간은 1초씩 흐르기때문에 ```setInterval(function(),1000)```를 추가해준다.
  
  ```js

  const clock = document.querySelector("h2#clock");

  function getClock() {
    const date = new Date();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  getClock();
  setInterval(getClock, 1000);
  ```

## 4. weather API 사용하기

- 사용자의 현재 위치를 기반으로 날씨 정보를 가져와 웹 페이지에 표시하는 코드를 안내한다.
- ```OpenWeatherMap API```를 사용하여 현재 위치의 날씨 정보를 가져온다.

  ```js
  const API_KEY = API_KEY 넣기

  // 위치 정보를 성공적으로 가져온 경우 실행되는 콜백 함수
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =       `https://api.openweathermap.org/data/2.5/weatherlat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`    ;

    // OpenWeatherMap API로 날씨 정보를 가져옵니다.
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // HTML에서 날씨 정보를 표시할 요소를 선택합니다.
      // 날씨 정보를 화면에 업데이트합니다.
  
    });
  }

    // 위치 정보를 가져오지 못한 경우 실행되는 콜백 함수
    function onGeoError() {
      alert("Can't find you, No weather for you.");
    }

    // 사용자의 현재 위치 정보를 가져옵니다.
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    ```
