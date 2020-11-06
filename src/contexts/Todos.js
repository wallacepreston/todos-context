import React, {useEffect, useState} from "react";

// the context is like a new piece of state.  This is what will be updated via our provider component below, and what will be accessed via the useContext hooks in our components
export const TodosContext = React.createContext({
  todos: [],
  setTodos: () => {} // placeholder.  Could put anything here, but initializing with function so stay consistent
});


// the context provider is simply a component. When we pass the other components as children, it "provides" the state/data necessary to the components
const TodosProvider = props => {
  const [todos, setTodos] = useState([]);

  // mimick an API call
  useEffect(() => {
    // this is where a fetch would go to fetch todos, then set the todos
    setTodos(
      [
        { id: 1, name: "task 1", quantity: 5 },
        { id: 2, name: "task 2", quantity: 2 },
        { id: 3, name: "task 3", quantity: 6 },
        { id: 4, name: "task 4", quantity: 10 },
        { id: 5, name: "task 5", quantity: 1 }
      ]
    );
    
  }, []);
  return <TodosContext.Provider
    value={{
      todos,
      setTodos // using the `setTodos` function we created from the `useState` hook above.
    }} >
    {props.children}
  </TodosContext.Provider>
}

export default TodosProvider