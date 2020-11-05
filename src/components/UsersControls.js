import React, { useContext } from "react";
import UsersContext from "../contexts/Users.js";

const UsersControls = () => {
  const { users, setUsers, setUser } = useContext(UsersContext);

  // const operateOnUser = (user, operation) => {
  //   const newUser = {...user, length: operation === 'add' ? user.length + 1 : user.length - 1};
  //   setUsers(users.map(user => {
  //     if(user.id === newUser.id) return newUser;
  //     return user;
  //   }))
  // };

  return (
    <>
      {users.map(user => (
        <div key={user.id} >
          <button onClick={() => setUser(user)}>
            {user.name + ': '}
            {/* <button onClick={() => operateOnUser(user, 'subtract')}>-</button>
            <button onClick={() => operateOnUser(user, 'add')}>+</button> */}
          </button>
        </div>
      ))}
    </>
  );
};
export default UsersControls;
