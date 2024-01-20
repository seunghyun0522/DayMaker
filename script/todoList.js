const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector(".todo-input");
const toDoList = document.querySelector(".todo-list");

//todo list 객체로 받을꺼임
let toDos = [];

const TO_DOS = "todos";

function saveToDos() {
  //JSON.stringify(속성) => 값을 JSON 표기법으로 변환
  //JSON.stringify(toDos) => toDos를 객체로 받아올 수 있도록 변환
  localStorage.setItem(TO_DOS, JSON.stringify(toDos));
}

function deleteTodo(event) {
  //타겟의 부모를 찾는다
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDoList(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const p = document.createElement("p");
  p.innerText = newTodo.text;
  //삭제
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(p);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function toDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); // 객체에 넣어줌
  paintToDoList(newToDoObj);
  saveToDos(); //문자열로 변환
}

function logOutClick() {
  localStorage.removeItem(TO_DOS);
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TO_DOS);

if (savedToDos !== null) {
  //문자열을 객체로 변경한다.
  const parsedToDos = JSON.parse(savedToDos);
  //처음엔 빈 객체로 있지만 savedToDos가 있다면 빈객체를 localStorage에서 받는다.
  toDos = parsedToDos;
  //paintToDoList를 localStorage에 가지고 있는 수만큼 반복
  //리스트가 5개면 paintToDoList를 5번 반복함으로 5개의 리스트가 나옴
  parsedToDos.forEach(paintToDoList);
}

logOut.addEventListener("click", logOutClick);
