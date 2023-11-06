import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function titleChangeHandler(event) {
    return setTitle(event.target.value);
  }

  function cntentChangeHandler(event) {
    return setContent(event.target.value);
  }

  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "리액트 뿌시기",
      content: "컴포넌트 100개 만들기",
      isDone: false,
    },
  ]);

  function onSubmitHandler() {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
  }

  function OnCheckEnter(event) {
    if (event.key === "Enter") {
      onSubmitHandler();
    }
  }

  return (
    <div className="container">
      <div className="mainPage">
        <header className="header">
          <span className="header_text">MH Todo List</span>
          <span className="header_text">Sparta_React 3기</span>
        </header>

        {/* 입력창 시작 */}

        <form onKeyPress={OnCheckEnter} name="todolist" className="form">
          <label>제목:&nbsp;</label>
          <input
            placeholder="제목을 입력하세요"
            onChange={titleChangeHandler}
          />
          <label>내용:&nbsp;</label>
          <input
            placeholder="내용을 입력하세요"
            onChange={cntentChangeHandler}
          />
          <button type="reset" onClick={onSubmitHandler}>
            추가하기
          </button>
        </form>

        {/* Work 리스트 */}

        <div className="working">Working..!</div>
        <div className="ing-ListBox">
          {todo.map(function (item) {
            return (
              <div className="card">
                <h1>{item.title}</h1>
                <h3>{item.content}</h3>
                <button>삭제</button>
                <button>완료</button>
              </div>
            );
          })}
        </div>

        {/* Done 리스트 */}

        <div className="done">Done..!</div>
        <div className="done-ListBox">{/* <div className>insert</div> */}</div>
      </div>
    </div>
  );
}

export default App;
