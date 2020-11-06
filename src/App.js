import React, { useState, useEffect } from "react";
import "./style.css";
import TodosProvider from "./contexts/Todos.js";
import { UsersProvider } from "./contexts/Users.js";
import {
  Todos,
  Users,
} from "./components";

export default function App() {
  

  return (
    <TodosProvider>
      <UsersProvider>
        <div className="app-container">
          <Users />
          <Todos />
        </div>
      </UsersProvider>
    </TodosProvider>
  );
}
