const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".user-name");
const greeting = document.querySelector(".greeting");
const logIn = document.querySelector(".login");

const user = document.querySelector(".user p");
const content = document.querySelector(".content-wrap");
const logOut = document.querySelector(".logout button");

const USERNAME_KEY = "userNameKey";
const FADEOUT = "fadeOut";

function loginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  greting(username);
}

function greting(username) {
  greeting.innerText = `반갑습니다, ${username}님 🥰`;
  user.innerText = `${username}'s To-do `;

  setTimeout(function () {
    greeting.classList.add("fadeIn");
  }, 700);

  setTimeout(function () {
    greeting.classList.remove("fadeIn");
    greeting.classList.add("fadeOut");
  }, 2000);

  setTimeout(function () {
    logIn.style.display = "none";
  }, 2500);

  setTimeout(function () {
    content.classList.add("fadeIn");
  }, 2500);

  loginForm.classList.add("fadeOut");
  clockBox.classList.add("fadeOut");
  setTimeout(displayNone, 500);
}

function logOutClick() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

function displayNone() {
  loginForm.classList.add("hidden");
  clockBox.classList.add("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
const clockBox = document.querySelector(".clock-box");

if (savedUsername === null) {
  loginForm.addEventListener("submit", loginSubmit);
} else if (savedUsername !== null) {
  displayNone();
  loginForm.classList.remove("fadeOut");
  clockBox.classList.remove("fadeOut");
  greting(savedUsername);
}

logOut.addEventListener("click", logOutClick);
