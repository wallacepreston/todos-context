import React, { useState, useEffect } from "react";
import "./style.css";
import { TodosProvider } from "./contexts/Todos.js";
import { UsersProvider } from "./contexts/Users.js";
import {
  Todos,
  Users,
} from "./components";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  // mimick an API call
  useEffect(() => {
    // this is where a fetch would go to fetch todos, then set the todos
    setTodos(
      [
        { id: 1, name: "thing 1", length: 5 },
        { id: 2, name: "thing 2", length: 2 },
        { id: 3, name: "thing 3", length: 6 },
        { id: 4, name: "thing 4", length: 10 },
        { id: 5, name: "thing 5", length: 1 }
      ]
    );
    setUsers(
      [
        { id: 1, name: "BillyBob" },
        { id: 2, name: "Janey" },
        { id: 3, name: "SaraMcSillySister" },
        { id: 4, name: "TesterMcTesterson" },
      ]
    );
  }, []);

  return (
    <TodosProvider
      value={{
        todos,
        setTodos // using the `setTodos` function we created from the `useState` hook above.
      }}
    >
      <UsersProvider
        value={{
          user,
          setUser, // using the `setUsers` function we created from the `useState` hook above.
          users,
          setUsers // using the `setUsers` function we created from the `useState` hook above.
        }}
      >
        <div className="app-container">
          <Users />
          <Todos />
        </div>
      </UsersProvider>
    </TodosProvider>
  );
}
