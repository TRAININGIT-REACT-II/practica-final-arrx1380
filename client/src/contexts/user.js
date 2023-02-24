import { createContext } from "react";

const User = createContext({
  isLogged: true,
  update: () => {},
});

export default User;
