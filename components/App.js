
import React, {useState} from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";

const App = () => {
  //eslint-disable-next-line
  const [todos, setTodos] = useState([   //useState hook 함수
    {
      id:1,
      text:"할일 1",
      checked: true
    },
    {
      id:2,
      text:"할일 2",
      checked: false
    },
    {
      id:3,
      text:"할일 3",
      checked: true
    }
  ]);
  return(
   <Template todoLength={todos.length}>
     <TodoList todos={todos} />
   </Template>
  );
};

export default App;
