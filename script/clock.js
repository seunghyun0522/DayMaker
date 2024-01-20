const clock = document.querySelector(".clock");
const today = document.querySelector(".today");

function getclock() {
  const date = new Date();

  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let secondss = String(date.getSeconds()).padStart(2, "0");

  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let week = date.getDay();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  clock.innerHTML = `${hours}:${minutes}:${secondss}`;
  today.innerHTML = `${month} ${day} ${weekday[week]}`;
}

getclock();
setInterval(getclock, 1000);
