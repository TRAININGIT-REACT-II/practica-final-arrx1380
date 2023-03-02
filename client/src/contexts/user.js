import { createContext } from "react";

const User = createContext({
  current: localStorage.getItem("user") ?? null,
  update: () => {},
});

export default User;
