let todos = [];

const $todoList = document.querySelector('.todoList');

const render = () => {
  let html = '';
  todos.forEach(todo => {
    html += `<li id="${todo.id}">
  <span class="iconImportance ${todo.imp ? 'check' : ''}">중요도 : ${todo.imp ? '중요함' : '보통'}</span>
  <input type="checkbox" id="check${todo.id}" class="inputCheckbox"><label class="iconCheckbox" for="check${todo.id}"></label>
  <span class="subjectView">${todo.subject}</span>
  <button class="btnEdit">수정</button>
  <button class="btnDelete">삭제</button>
  <div class="contentView">
    ${todo.content}
    <div class="targetDate">완료 예정일 : D-2 (${todo.dDay})</div>
  </div>
</li>`;
  });

  $todoList.innerHTML = html;
};
const getTodos = () => {
  todos = [
    {
      id: 1, subject: 'test 제목입니다.', dDay: '2020-04-03', imp: false, content: '임시 데이터입니다', completed: true
    },
    {
      id: 2, subject: '해커톤 준비', dDay: '2020-04-03', imp: true, content: '해커톤 임시 데이터입니다', completed: false
    },
    {
      id: 3, subject: '투두리스트만들기', dDay: '2020-04-03', imp: false, content: '투두리스트 만들기 임시 데이터입니다', completed: false
    },
    {
      id: 4, subject: '삭제해볼것', dDay: '2020-04-03', imp: true, content: '삭제해볼것 임시 데이터입니다', completed: false
    },
    {
      id: 5, subject: '리스트를 만들어서 넣어봅시다.', dDay: '2020-04-03', imp: true, content: '리스트!!!! 임시 데이터입니다', completed: true
    }
  ];
  // sort
  todos.sort((a, b) => b.id - a.id);

  render();
};

window.onload = getTodos;
