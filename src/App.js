import { toBeEmptyDOMElement } from "@testing-library/jest-dom/matchers";
import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export default function App() {
  const initialStates = [
    {
      id: uuid(),
      title: "제목",
      contents: "내용",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목",
      contents: "내용",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목",
      contents: "내용",
      isDone: true,
    },
  ];

  const [todos, setTodo] = useState(initialStates);

  return (
    <main
      style={{
        backgroundColor: "#ebb434",
      }}
    >
      <Input todos={todos} setTodo={setTodo} />
      <TodoList
        todos={todos}
        setTodo={setTodo}
        listdone={false}
        btnName={"완료"}
      />
      <TodoList
        todos={todos}
        setTodo={setTodo}
        listdone={true}
        btnName={"완료취소"}
      />
    </main>
  );
}
