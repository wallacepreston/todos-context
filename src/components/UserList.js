import React, { useContext } from "react";
import UsersContext from "../contexts/Users.js";

const UserList = () => {
  const { users, selectedUser, selectedUserId } = useContext(UsersContext);

  return (
    <>
      {selectedUser && <h2>Current User: {selectedUser.name}</h2>}
      {users.map(currentUser => {
        const todosCount = currentUser.todos.length;
        return <div key={currentUser.id}>
          {
            currentUser.id === selectedUserId 
              ? <b>{currentUser.name}</b>
              : <>{currentUser.name}</>
          }
          {
            todosCount
              ? <> has {todosCount} todo{todosCount ? 's' : ''}</>
              : ''
          }
        </div>
      })}
    </>
  );
};
export default UserList;
