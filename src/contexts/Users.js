import React from "react";

const UsersContext = React.createContext({
  users: [],
  user: {},
  setUser: () => {}, // placeholder.  Could put anything here, but initializing with function so stay consistent
  setUsers: () => {} // placeholder.  Could put anything here, but initializing with function so stay consistent
});

export const UsersProvider = UsersContext.Provider;
export default UsersContext;
