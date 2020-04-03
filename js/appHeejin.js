let todos = [];

const $todoInputArea = document.querySelector("#todoInputArea");
const $inputSubject = document.querySelector(".inputSubject");
const $inputDate = document.querySelector(".inputDate");
const $textareaContent = document.querySelector(".textareaContent");
const $btnFull = document.querySelector(".btnFulll btnConfirm");

const render = () => {
  let html = "";
  todos.forEach(todo => {
    return (html += `<li>
      <span class="iconImportance check" ${todo.imp}? "checked":"">중요도 : 보통</span>
        <input type="checkbox" id="test1" class="inputCheckbox" ${todo.completed}?"checked":""}/>
            <label
            class="iconCheckbox"
            for="test1"
          ></label>
            <span class="${todo.inputSubject}">${todo.inputSubject}</span>
            <button class="btnEdit">수정</button>
            <button class="btnDelete">삭제</button>
            <div class="contentView">
              내용입니다. 내용입니다.
              <div class="${todo.inputDate}">완료 예정일 : D-2 (${todo.inputDate})</div>
            </div>
          </li>`);
  });
  $todos.innerHTML = html;
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const getTodos = () => {
  todos = [
    {
      id: 1,
      subject: "HTML",
      dDay: "2020-04-30",
      content: "this is content",
      imp: true,
      completed: true
    },
    {
      id: 2,
      subject: "CSS",
      dDay: "2020-05-21",
      content: "this is content",
      imp: true,
      completed: false
    },
    {
      id: 3,
      subject: "Javascript",
      dDay: "2020-05-30",
      content: "this is content",
      imp: false,
      completed: true
    },
    {
      id: 4,
      subject: "React",
      dDay: "2020-06-04",
      content: "this is content",
      imp: false,
      completed: false
    },
    {
      id: 5,
      subject: "TypeScript",
      dDay: "2020-06-20",
      content: "this is content",
      imp: true,
      completed: false
    }
  ];
  render();
};

window.onload = getTodos;

$todoInputArea.onkeyup = e => {
  if (e.keyCode !== 13) return;
  todos = [
    {
      id: generateId(),
      subject: "HTML",
      dDay: "2020-04-30",
      content: "this is content",
      imp: false,
      completed: false
    },
    ...todos
  ];
  $todoInputArea.value = "";
  console.log($todoInputArea);
  render();
};
