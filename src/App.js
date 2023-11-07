import React, { useState } from "react";
import "./App.css";

function App() {
  const initialstate = [
    {
      id: 1,
      title: "리액트",
      content: "리액트 공부하기",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트",
      content: "리액트 공부하기",
      isDone: false,
    },
  ];

  const [todo, setTodo] = useState(initialstate);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      제목
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      내용
      <input
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const newTodo = { ...todo };
        }}
      >
        추가하기
      </button>
      <div>
        {todo.map(function (item) {
          return (
            <>
              <div className="working">
                <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <h2>{item.content}</h2>
                <h5>{item.isDone}</h5>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
