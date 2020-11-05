import React, { useContext } from "react";
import {TodoList, TodosControls} from "./";

const Todos = props => {
  
  return (
    <div>
      <h1>Here are the todos!</h1>
      <TodoList />
      <h2>And some controls</h2>
      <TodosControls />
    </div>
  );
};
export default Todos;
