import React from "react";

function TodoList({ todos, setTodo, listdone, btnName }) {
  return (
    <div>
      <h2>{listdone === false ? "할 일 목록" : "완료목록"}</h2>
      {todos
        .filter((todo) => {
          return todo.isDone === listdone;
        })
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                paddingLeft: "10px",
                paddingBottom: "20px",
              }}
            >
              <h2>{item.title}</h2>
              <h2>{item.contents}</h2>
              <h4>{item.isDone.toString()}</h4>
              <button
                onClick={() => {
                  const completedTodo = todos.map((todo) => {
                    if (item.id === todo.id) {
                      return {
                        ...item,
                        isDone: !item.isDone,
                      };
                    } else {
                      return todo;
                    }
                  });
                  setTodo(completedTodo);
                }}
              >
                {btnName}
              </button>
              <button
                onClick={() => {
                  const deletedTodo = todos.filter((todo) => {
                    return todo.id !== item.id;
                  });
                  setTodo(deletedTodo);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
