import React, { useContext } from "react";
import UsersContext from "../contexts/Users.js";

const UserList = () => {
  const { users, user } = useContext(UsersContext);

  return (
    <>
      <h2>Current User: {user && user.name}</h2>
      {users.map(currentUser => (
        <div key={currentUser.id}>
          
          {
            currentUser.id === user.id 
              ? <b>{currentUser.name}</b>
              : <>{currentUser.name}</>
          }
        </div>
      ))}
    </>
  );
};
export default UserList;
