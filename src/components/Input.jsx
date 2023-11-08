import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

function Input({ todos, setTodo }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newTodo = {
          id: uuid(),
          title: title,
          contents: contents,
          isDone: false,
        };
        setTodo([...todos, newTodo]);
        setTitle("");
        setContents("");
      }}
    >
      제목
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      내용
      <input
        value={contents}
        onChange={(event) => {
          setContents(event.target.value);
        }}
      />
      <button>추가하기</button>
    </form>
  );
}

export default Input;
