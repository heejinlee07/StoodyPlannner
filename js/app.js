// State
let todos = [];

// Variable Declaration
const $incompleteList = document.querySelector(".incomplete");
const $completeList = document.querySelector(".complete");
const $todoInput = document.querySelector("#todoInputArea");
const $inputSubject = document.querySelector(".inputSubject");
const $inputDate = document.querySelector(".inputDate");
const $btnImp = document.querySelector(".btnImportance");
const $txtContent = document.querySelector(".textareaContent");
const $btnConfirm = document.querySelector(".btnConfirm");

// 초기 데이터(딱 한번만 실행)
// localStorage.setItem(
//   "User",
//   JSON.stringify([
//     {
//       id: 1,
//       subject: "HTML",
//       dDay: "2020-04-30",
//       content: "this is content",
//       imp: true,
//       completed: true
//     },
//     {
//       id: 2,
//       subject: "CSS",
//       dDay: "2020-05-21",
//       content: "this is content",
//       imp: true,
//       completed: false
//     },
//     {
//       id: 3,
//       subject: "Javascript",
//       dDay: "2020-05-30",
//       content: "this is content",
//       imp: false,
//       completed: true
//     },
//     {
//       id: 4,
//       subject: "React",
//       dDay: "2020-06-04",
//       content: "this is content",
//       imp: false,
//       completed: false
//     },
//     {
//       id: 5,
//       subject: "TypeScript",
//       dDay: "2020-06-20",
//       content: "this is content",
//       imp: true,
//       completed: false
//     }
//   ])
// );

// Function Declaration
const getTodos = () => {
  // localStorage에서 todos 가져온다
  const userData = localStorage.getItem("User");
  todos = JSON.parse(userData);
  todos = todos ? todos.sort((todo1, todo2) => todo2.id - todo1.id) : [];
  render();
};

const updateTodos = () => {
  localStorage.setItem("User", JSON.stringify(todos));
};

const render = () => {
  updateTodos();

  let incompleteHtml = "";
  let completeHtml = "";
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completeTodos = todos.filter(todo => todo.completed);

  incompleteHtml = renderHtml(incompleteTodos, incompleteHtml);
  completeHtml = renderHtml(completeTodos, completeHtml);

  $incompleteList.innerHTML = incompleteHtml;
  $completeList.innerHTML = completeHtml;
};

const renderHtml = (todos, html) => {
  todos.forEach(todo => {
    html += `
    <li id="${todo.id}">
      <span class="iconImportance ${
        todo.imp ? "check" : ""
      }"> 중요도 :  보통
      </span>
      <input type="checkbox" id="ck-${todo.id}" class="inputCheckbox" ${
      todo.completed ? "checked" : ""}>
      <label class="iconCheckbox" for="ck-${todo.id}"></label>
      <span class="subjectView">${todo.subject}</span>
      <button class="btnEdit">수정</button>
      <button class="btnDelete">삭제</button>
      <div class="contentView more">
        ${todo.content}
        <div class="targetDate">
        완료 예정일 : D-${getDday(todo.dDay)} (${todo.dDay})
        </div>
      </div>
    </li>
    `;
  });
  return html;
};


const getDday = () => {
  return 10;
}

const getId = () => {
  if (todos.length === 0) return 1;
  return Math.max(...todos.map(({ id }) => id)) + 1;
};

$btnImp.onclick = () => {
  $btnImp.classList.toggle('check');
};

const editTodo = id => {
  // const myTodo = todos.find(todo => todo.id === +id);
  // $inputSubject.value = myTodo.subject;
  // $inputDate.value = myTodo.dDay;
  // $btnImp.classList.toggle('check', myTodo.imp);
  // $txtContent.value = myTodo.content;
  // removeTodo(id);
}

// Event Bindings
window.onload = getTodos;

// button.btnConfirm onclick event
$btnConfirm.onclick = () => {

  todos = [{ id: getId(), subject: `${$inputSubject.value}`, dDay: `${$inputDate.value}`, content: `${$txtContent.value}`, imp: $btnImp.classList.contains('check') ? true : false, completed: false }, ...todos];

  $inputSubject.value = '';
  $inputDate.value = '';
  $btnImp.classList.remove('check');
  $txtContent.value = '';

  render();
};

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== +id);
}

$incompleteList.onclick = e => {
  if (e.target.matches('.incomplete > li > .btnDelete')) {
    removeTodo(e.target.parentNode.id);
    render();
  }
  if (e.target.matches('.incomplete > li > .btnEdit')) {
    editTodo(e.target.parentNode.id);
    render();
  }
  return;
};

$completeList.onclick = e => {
  if (e.target.matches(".complete > li > .btnDelete")) {
    removeTodo(e.target.parentNode.id);
    render();
  }
  if (e.target.matches('.complete > li > .btnEdit')) {
    editTodo(e.target.parentNode.id);
    render();
  }
  return;
};





// const $btnConfirm = document.querySelector('.btnConfirm');
// const $inputDate = document.querySelector('.inputDate');

// let today = new Date();
// const year = today.getFullYear();
// let month = today.getMonth() + 1;
// let day = today.getDate();
// month = month < 10 ? '0' + month : month;
// day = day < 10 ? '0' + day : day;
// today = year + '-' + month + '-' + day;
// $inputDate.setAttribute('min', today);



// const getDday = (dDay) => {
//   // let [myYear, myMonth, myDay] = $inputDate.value.split('-');
//   // const toDay = new Date();
//   // myYear = +myYear;
//   // myMonth = +myMonth - 1;
//   // myDay = +myDay;
//   // const dDay = new Date(myYear, myMonth, myDay);
//   let today = new Date();
//   const year = today.getFullYear();
//   let month = today.getMonth() + 1;
//   let day = today.getDate();
//   month = month < 10 ? '0' + month : month;
//   day = day < 10 ? '0' + day : day;
//   today = year + '-' + month + '-' + day;
//   // $inputDate.setAttribute('min', today);
//   console.log('dday: ', dDay);
//   console.log('today: ', today);
  
  
//   const gap = dDay.getTime() - today.getTime();
//   let result = Math.ceil(gap / (1000 * 60 * 60 * 24));
//   result = result <= 0 ? result * -1 : result;
//   return result;
// }
