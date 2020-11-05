import React, { useContext } from "react";
import TodosContext from "../contexts/Todos.js";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          <b>{todo.name}:</b> do {todo.length} times
        </div>
      ))}
    </>
  );
};
export default TodoList;
