import React, { useState } from "react";
import "./App.css";

// <제출 전 상태>
// 완료버튼 클릭시 done으로 이동시키는 부분에서 아예 막힘.
// 구글에 검색해도 이해가 안 됨.
// 혼자 힘으로 해보고 싶어서 튜터님에게 안 감. 결국 과제완성 못 함

// ㅏㅈ배아재베앚ㅂ아재앚베앶방제뱅ㅈ배ㅔ앚 베ㅐ아 ㅈ베ㅐ아 ㅈ베ㅐ아 ㅈㅂ
//ㅂ재ㅔ핮ㅂ ㅔ해ㅏㅂㅈ해ㅔㅈ바해ㅔㅈ바해ㅔㅂㅈ합재ㅔ핮ㅂ
//해베하재ㅔ하헤ㅐㅏㅂ헤ㅐㅈㅂ하ㅐㅔ하배ㅔㅎ자베ㅐㅎㅈ바헤ㅐ바헤뱋ㅂ
//해ㅔㅈ핮베ㅐㅎ잡헤ㅐㅏ헤ㅐ밯베ㅐ합헤ㅐ잡해ㅔ바헤ㅐ바애ㅔ바래ㅔㅂ잘제ㅐ바래제ㅏ애ㅔㅏㅁ에ㅐㄴ망레ㅐㅏㅀ베재ㅏ세ㅐㅈ박셉재ㅏㅂㅈ
//ㅔㅐㅂ자헤ㅐㅈ바헤ㅐㅈ밯 ㅐㅔㅈ바 ㅔ핮베ㅐㅏㅇㄹㅈ베ㅐ앚베ㅐ 앚베ㅐㅏㅇ ㅈ베ㅐ 에
//장ㅈ베ㅐㅇ ㅈ베ㅐㅏㅇ 베ㅐㅇ ㅏ베ㅐㅇ 잡에ㅐㅏㅂㅇ ㅐㅔㅂ아 ㅈ베ㅐ아 ㅈ베ㅐㅏㄹ헤ㅐㄴ마레ㅐㅏㄴ케채ㅏ케채ㅏㅋㅌ체ㅐㅏ테ㅐ란매ㅔㅎ라ㅐ베ㅏ헺백새ㅔㅈ바래ㅔ장레ㅐㅏㅁ에ㅐ마에ㅐㅏㅈ베ㅐㄷ압제ㅐㅏㅈ베ㅐ핮베ㅐㅏㅎㄹㅈ베ㅐ랒배ㅔㅏㅈ배ㅔㅇ

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "제목: 예시",
      content: "내용: 예시",
      isDone: false,
    },
  ]);

  //제목
  function titleChangeHandler(event) {
    return setTitle(event.target.value);
  }
  //내용
  function contentChangeHandler(event) {
    return setContent(event.target.value);
  }

  //추가하기
  function onSubmitHandler() {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
  }

  //삭제버튼클릭
  function RemoveBtn(id) {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  }

  return (
    <div className="container">
      <div className="mainPage">
        <header className="header">
          <span className="header_text">MH Todo List</span>
          <span className="header_text">Sparta_React 3기</span>
        </header>

        {/* 입력창 시작 */}

        <form name="todolist" className="form">
          <label className="label">제목: &nbsp;</label>
          <input className="input" onChange={titleChangeHandler} />
          <label className="label">내용: &nbsp;</label>
          <input className="input" onChange={contentChangeHandler} />
          <button className="addbtn" type="reset" onClick={onSubmitHandler}>
            추가하기
          </button>
        </form>

        {/* Work 리스트 */}

        <div className="working">Working..🔥</div>
        <div className="ing-ListBox">
          {todo.map(function (item) {
            if (item.isDone === false) {
              return (
                <div className="card">
                  <h1>{item.title}</h1>
                  <h3>{item.content}</h3>
                  <button
                    className="listbtn"
                    onClick={() => RemoveBtn(item.id)}
                  >
                    삭제
                  </button>
                  <button className="listbtn">완료</button>
                </div>
              );
            } else {
              return console.log(null);
            }
          })}
        </div>

        {/* Done 리스트 */}

        <div className="done">Done..🎉</div>
        <div className="done-ListBox"></div>
      </div>
    </div>
  );
}

export default App;
