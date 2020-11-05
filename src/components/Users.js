import React, { useContext } from "react";
import {UserList, UsersControls} from "./";

const Users = props => {
  
  return (
    <div>
      <h1>Here are the Users!</h1>
      <UserList />
      <h2>Select a User</h2>
      <UsersControls />
    </div>
  );
};
export default Users;
