const INPUT = "todos/CHANGE_INPUT";
const SUBMIT = "todos/SUBMIT";
const DELETE = "todos/DELETE";

let id = 1;

const initialState = {
  todos: [
    {
      id: id,
      text: "리덕스 배우기",
      done: false,
    },
    {
      id: ++id,
      text: "밥 먹기",
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        todos: state.todos.concat({
          id: ++id,
          text: action.Text,
          done: false,
        }),
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
