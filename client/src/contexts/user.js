import { createContext } from "react";

const User = createContext({
  isLogged: localStorage.getItem("logged") == "true" ? true : false,
  update: () => {},
});

export default User;
