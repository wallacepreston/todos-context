import React from "react";

const TodosContext = React.createContext({
  todos: [],
  setTodos: () => {} // placeholder.  Could put anything here, but initializing with function so stay consistent
});

export const TodosProvider = TodosContext.Provider;
export default TodosContext;
