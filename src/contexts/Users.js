import React, { useState, useEffect } from "react";

export const UsersContext = React.createContext({
  users: [],
  selectedUserId: {},
  setSelectedUserId: () => {}, // placeholder.  Could put anything here, but initializing with function so stay consistent
  setUsers: () => {} // placeholder.
});

const UsersProvider = props => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState({});
  const selectedUser = users.find(user => user.id === selectedUserId); // computed state

  // mimick an API call
  useEffect(() => {
    // this is where a fetch would go to fetch users, then set the users
    setUsers(
      [
        { id: 1, name: "BillyBob", todos: [] },
        { id: 2, name: "Janey", todos: [] },
        { id: 3, name: "SaraMcSillySister", todos: [] },
        { id: 4, name: "TesterMcTesterson", todos: [] },
      ]
    );
  }, []);
  return <UsersContext.Provider
    value={{
      selectedUser,
      selectedUserId,
      setSelectedUserId,
      users,
      setUsers // using the `setUsers` function we created from the `useState` hook above.
    }}
  >
    {props.children}
  </UsersContext.Provider>
};
export default UsersProvider;
