import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const dispatch = useDispatch();
  const inputText = useRef();

  const content = useSelector((state) => state.todos.todos);
  console.log(content);

  const onSubmit = (e) => {
    e.preventDefault();
    const Text = inputText.current.value;
    dispatch({ type: "todos/SUBMIT", Text });
    inputText.current.value = "";
  };

  const onButtonClick = (id) => {
    dispatch({ type: "todos/DELETE", id });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputText}
          onChange={() => {
            dispatch({ type: "todos/CHANGE_INPUT" });
          }}
        />
        <button>입력</button>
      </form>
      <br />
      <br />
      {content.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() => {
              onButtonClick(todo.id);
            }}
          >
            제거
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
